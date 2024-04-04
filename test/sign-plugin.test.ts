import { Web3 } from "web3";
import { SignProtocolPlugin, SignProtocolContract } from "../src";

const rpcUrl = "https://rpc.ankr.com/scroll";

describe("SignProtocolPlugin Tests", () => {
  it("should register example plugin to Web3", () => {
    const web3 = new Web3(rpcUrl);
    web3.registerPlugin(new SignProtocolPlugin());

    expect(web3.sp).toBeInstanceOf(SignProtocolPlugin);
    expect(web3.sp.pluginNamespace).toBe("sp");
    expect(web3.sp.getContract).toBeInstanceOf(Function);
    expect(web3.sp.getContractAddress).toBeInstanceOf(Function);
  });

  it("should throw error if address passed to plugin function is not valid", () => {
    const web3 = new Web3("http://127.0.0.1:8545");
    web3.registerPlugin(new SignProtocolPlugin());

    expect(() => {
      web3.sp.getContract("0x123");
    }).toThrow("SignProtocolPlugin: Invalid contract address");
  });
});

describe("SignProtocolPlugin Method Tests", () => {
  let web3: Web3;
  let signProtocolContract: SignProtocolContract;

  beforeAll(async () => {
    web3 = new Web3(rpcUrl);
    web3.registerPlugin(new SignProtocolPlugin());
    const contractAddress = await web3.sp.getContractAddress();
    signProtocolContract = web3.sp.getContract(contractAddress);
  });

  it("contractAddresses: should get contract addresses for given chainId", async () => {
    const contractAddress = await web3.sp.getContractAddress(1);
    expect(typeof contractAddress).toBe("string");
    expect(contractAddress).toEqual(
      "0x3D8E699Db14d7781557fE94ad99d93Be180A6594"
    );
  });

  it("getContract: should get schema from contract instance", async () => {
    const schemaID = 0x2; // id can be in hex or decimal
    const { data, revocable, dataLocation, timestamp } =
      await signProtocolContract.methods.getSchema(schemaID).call();
    expect(typeof data).toBe("string");
    expect(typeof revocable).toBe("boolean");
    expect(typeof dataLocation).toBe("bigint");
    expect(typeof timestamp).toBe("bigint");
  });

  it("getContract: should get attestation from contract instance", async () => {
    const attestationID = 1; // id can be in hex or decimal
    const { schemaId, attester, validUntil, dataLocation, recipients, data } =
      await signProtocolContract.methods.getAttestation(attestationID).call();
    expect(typeof schemaId).toBe("bigint");
    expect(typeof attester).toBe("string");
    expect(typeof validUntil).toBe("bigint");
    expect(typeof dataLocation).toBe("bigint");
    expect(typeof recipients).toBe("object");
    expect(typeof data).toBe("string");
  });

  it("getContract: should get counters for schema and attestation", async () => {
    const schemaCounter = await signProtocolContract.methods
      .schemaCounter()
      .call();
    const attestationCounter = await signProtocolContract.methods
      .attestationCounter()
      .call();

    expect(typeof schemaCounter).toBe("bigint");
    expect(typeof attestationCounter).toBe("bigint");
  });
});
