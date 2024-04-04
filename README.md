# Sign Protocol Web3 Plugin

This plugin is a web3.js plugin for the Sign Protocol. It allows you to interact with the [Sign Protocol](https://sign.global/) using web3.js.

### Features

- Get the contract address of the Sign Protocol for the current network or a specific chain ID.
- Schema Registrations
- Attestations

## Installation

```bash
npm install web3-plugin-sign web3@latest --save
```

## Usage

### Basic Usage

```ts
import Web3 from "web3";
import { SignProtocolPlugin } from "web3-plugin-sign";

const web3 = new Web3("https://rpc.ankr.com/scroll"); // any rpc url
web3.registerPlugin(new SignProtocolPlugin());

// Get the contract address of the Sign Protocol for the current network
const contractAddress = await web3.sp.getContractAddress();

// or get the contract address of the Sign Protocol for a specific chain ID
// const contractAddress = await web3.sp.getContractAddress(137); // Polygon Mainnet chain ID

// Contract instance
const signProtocolContract = web3.sp.getContract(contractAddress);

// Getting schema by ID
const schemaID = 1;
const schema = await signProtocolContract.methods.getSchema(1).call();
console.log("schema:", schema);
// expected output:
// schema: {
//       registrant: '0x88eb4a509C756Ff69bA0eB73bC88212441dCa84e',
//       revocable: true,
//       dataLocation: 0n,
//       maxValidFor: 0n,
//       hook: '0x0000000000000000000000000000000000000000',
//       timestamp: 1712101178n,
//       data: '{"name":"teste schema","description":"tester schema","data":[{"name":"dfs","type":"string[]"}]}'
//     }

// Getting attestation by ID
const attestationID = 1;
const attestation = await signProtocolContract.methods.getAttestation(1).call();
console.log("attestation:", attestation);
```

### Register Schema

```ts
const schemaData = JSON.stringify({
  name: "user schema",
  description: "user schema",
  data: [
    {
      name: "name",
      type: "string"
    },
    {
      name: "age",
      type: "uint8"
    },
    {
      name: "country",
      type: "string"
    },
    {
      name: "isStudent",
      type: "bool"
    }
  ]
});
const schemaRequest = {
  registrant: "0x88eb4a509C756Ff69bA0eB73bC88212441dCa84e",
  revocable: true, // whether the schema is revocable
  dataLocation: 0, // 0 for on-chain, 1 for arweave, 2 for ipfs, 3 for custom
  maxValidFor: 0, // 0 for valid forever
  hook: "0x00000...", // optional
  data: schemaData // raw schema data
};

const tx = await signProtocolContract.methods.registerSchema(schema).send({
  from: account
});
```

Refer [Schema Docs](https://docs.sign.global/developer-apis/index-2/index/index-1/schema) for more information.

### Attest

```ts
const encodedData = web3.eth.abi.encodeParameters(
  ["string", "uint8", "string", "bool"], // schema data types
  ["Alice", 25, "USA", true] // schema data values
 );

const attestationRequest = {
  schemaID: 1, // schema id that the attestation is based on
  linkedAttestationId: 0, // if current attestation is linked previous attestation
  data: encodedData // encoded attestation data based on schema
  validUntil: 0, // 0 for valid forever
  revoked: false, // whether the attestation is revoked
  recipients:[] // list of recipients
  attester: account, // attester address
  dataLocation: 0, // 0 for on-chain, 1 for arweave, 2 for ipfs, 3 for custom
};

const tx = await signProtocolContract.methods.attest(attestationRequest).send({
  from: account
});
```

Refer [Attestation Docs](https://docs.sign.global/developer-apis/index-2/index/index/isp#attest-1) for more information.

Refer to the [Sign Protocol Contract documentation](https://docs.sign.global/developer-apis/index-2/index/index/isp) for more information.

### Publishing

To publish a new version of the package to npm, run the following command:

```bash
npm run build

npm publish
```

## References

- [Sign Protocol Documentation](https://docs.sign.global/)
- [Sign Protocol Schema](https://docs.sign.global/developer-apis/index-2/index/index-1/schema#schema)
- [Sign Protocol Attestation](https://docs.sign.global/developer-apis/index-2/index/index/isp#attest-1)
- [Web3.js Plugin Documentation](https://docs.web3js.org/guides/web3_plugin_guide/)

## Safety

This is experimental software and subject to change over time.

This package is not audited and has not been tested for security. Use at your own risk. I do not give any warranties and will not be liable for any loss incurred through any use of this codebase.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
