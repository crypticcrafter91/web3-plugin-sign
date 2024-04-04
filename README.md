# Sign Protocol Web3 Plugin

This plugin is a web3.js plugin for the Sign Protocol. It allows you to interact with the Sign Protocol using web3.js.

## Installation

```bash
npm install web3-plugin-sign web3@latest --save
```

## Usage

### Basic Usage

```ts
import Web3 from "web3";
import { SignProtocolPlugin } from "web3-plugin-sign";

const web3 = new Web3("https://rpc.ankr.com/eth");
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

Refer to the [Sign Protocol Contract documentation](https://docs.sign.global/developer-apis/index-2/index/index/isp) for more information.

### Publishing

To publish a new version of the package to npm, run the following command:

```bash
npm run build

npm publish
```

## References

- [Sign Protocol Documentation](https://docs.sign.global/)
- [Web3.js Plugin Documentation](https://docs.web3js.org/guides/web3_plugin_guide/)

## Safety

This is experimental software and subject to change over time.

This package is not audited and has not been tested for security. Use at your own risk. I do not give any warranties and will not be liable for any loss incurred through any use of this codebase.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
