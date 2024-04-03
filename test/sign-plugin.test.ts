import { Web3 } from "web3";
import { SignProtocolPlugin } from "../src";

const rpcUrl = "http://127.0.0.1:8545";

describe("SignProtocolPlugin Tests", () => {
  it("should register example plugin to Web3", () => {
    const web3 = new Web3(rpcUrl);
    web3.registerPlugin(new SignProtocolPlugin());

    expect(web3.sp).toBeInstanceOf(SignProtocolPlugin);
    expect(web3.sp.pluginNamespace).toBe("sp");
    expect(web3.sp.someMethod).toBeInstanceOf(Function);
    expect(web3.sp.getContract).toBeInstanceOf(Function);
    expect(web3.sp.getContractAddress).toBeInstanceOf(Function);
  });
});

describe("SignProtocolPlugin Method Tests", () => {
  let web3: Web3;

  beforeAll(() => {
    web3 = new Web3(rpcUrl);
    web3.registerPlugin(new SignProtocolPlugin());
  });

  it("someMethod: should return passed data", () => {
    const res = web3.sp.someMethod("test");
    expect(typeof res).toBe("string");
    expect(res).toEqual("test");
  });
});
