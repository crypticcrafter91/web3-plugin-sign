import {
  Web3PluginBase,
  Contract,
  validator,
  eth,
  FMT_NUMBER,
  FMT_BYTES
} from "web3";
import SignProtocolABI from "./abis/SignProtocol";

export type SignProtocolContract = Contract<typeof SignProtocolABI>;

const contractAddreses: Record<number, string> = {
  1: "0x3D8E699Db14d7781557fE94ad99d93Be180A6594", // ethereum mainnet
  137: "0xe2C15B97F628B7Ad279D6b002cEDd414390b6D63", // polygon mainnet
  534352: "0xFBF614E89Ac79d738BaeF81CE6929897594b7E69", // scroll mainnet
  196: "0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD", // x1 mainnet
  7000: "0x1BC26dd23b773806f080Acf65Cfb744166be9463", // zeta mainnet
  84532: "0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD", // base sepolia
  80085: "0x2774d96a841E522549CE7ADd3825fC31075384Cf", // berachain artio,
  5611: "0x72efA4093539A909C1f9bcCA1aE6bcDa435a3433", //opbnb testnet
  161221135: "0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD", // plume testnet
  80001: "0x4665fffdD8b48aDF5bab3621F835C831f0ee36D7", // mumbai testnet
  534351: "0x4e4af2a21ebf62850fD99Eb6253E1eFBb56098cD", // scroll sepolia
  7001: "0x00aFD4466E4Afa4F43cCd414b1BC65e574ACA2f5" // zetachain testnet
};

export class SignProtocolPlugin extends Web3PluginBase {
  public pluginNamespace = "sp";

  public someMethod(param: string): string {
    return param;
  }

  public getContract(address: string): SignProtocolContract {
    if (!validator.isAddress(address)) {
      throw new Error("SignProtocolPlugin: Invalid contract address");
    }
    const contract = new Contract(SignProtocolABI, address);
    contract.link(this);
    return contract;
  }

  public async getContractAddress(chainId?: number): Promise<string> {
    if (!chainId) {
      chainId = await eth.getChainId(this, {
        number: FMT_NUMBER.NUMBER,
        bytes: FMT_BYTES.HEX
      });
    }
    // Do some logic to get the contract address
    const contractAddress = contractAddreses[chainId];
    if (!contractAddress)
      throw new Error(`SignProtocolPlugin: Unsupported chainId ${chainId}`);
    return contractAddress;
  }
}

// Module Augmentation
declare module "web3" {
  interface Web3Context {
    sp: SignProtocolPlugin;
  }
}
