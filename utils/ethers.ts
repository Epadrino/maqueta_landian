import * as ethers from "ethers";
import LANDIAN_ABI from "./abi/erc721.abi.json";
import METAFOUNDERS_ABI from "./abi/meta.abi.json";
import ERC20_ABI from "./abi/erc20.abi.json";
import TOKEN20_ABI from "./abi/token20.abi.json";

const LANDIAN_ADDRESS = process.env.NEXT_PUBLIC_LANDIAN_LANDS_CONTRACT as string;
const METAFOUNDERS_PAYMENT_CONTRACT = process.env.NEXT_PUBLIC_METAFOUNDERS_PAYMENT_CONTRACT as string;
const BUSD_CONTRACT = process.env.NEXT_PUBLIC_METAFOUNDERS_BUSD_CONTRACT as string;
const USDT_CONTRACT = process.env.NEXT_PUBLIC_METAFOUNDERS_USDT_CONTRACT as string;
const LANDER_ADDRESS = process.env.NEXT_PUBLIC_LANDIAN_LANDER_ADDRESS as string;
const RPC = process.env.NEXT_PUBLIC_METAFOUNDERS_RPC_PROVIDER as string;
const RPC_PROVIDER = new ethers.providers.JsonRpcProvider(RPC);
const METAFOUNDERS_MEGA_PROJECT = process.env.NEXT_PUBLIC_METAFOUNDERS_MEGA_PROJECT as string;
const METAFOUNDERS_META_TOKENS = process.env.NEXT_PUBLIC_METAFOUNDERS_META_TOKENS as string;

const LANDIAN_WITH_RPC = new ethers.Contract(
  LANDIAN_ADDRESS,
  LANDIAN_ABI,
  RPC_PROVIDER
);

const METAFOUNDERS_WITH_RPC = new ethers.Contract(
  METAFOUNDERS_PAYMENT_CONTRACT,
  METAFOUNDERS_ABI,
  RPC_PROVIDER
)

const METATOKENS_WITH_RPC = new ethers.Contract(
  METAFOUNDERS_META_TOKENS,
  TOKEN20_ABI,
  RPC_PROVIDER
)

const MEGAPROJECTS_WITH_RPC = new ethers.Contract(
  METAFOUNDERS_MEGA_PROJECT,
  TOKEN20_ABI,
  RPC_PROVIDER
)
/**
* * returns a number of lands that address has
* @param {string} landerAddress Wallet of lander owner.
*/
export const getLandsOfLander = async (landerAddress: string) => {
  const availableLands = await LANDIAN_WITH_RPC.tokensOfOwner(landerAddress);
  return availableLands.length;
};


/**
 * * This function approve the different currency that you choose: Valids [USDT,BUSD]
 * @param {Enumerator ["BUSD", "USDT"]} _currency
 * @param {number} _amount
 * @param {Provider | null} walletConnectProvider
 * @returns {string} - tx hash
 */
export const approveERC20 = async (_currency: string, _amount: number, walletConnectProvider: any = null) => {

  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(walletConnectProvider ? walletConnectProvider : window.ethereum);
  console.log(provider);
  const signer = provider.getSigner();
  if (_currency == "BUSD") {
    const busdContract = new ethers.Contract(BUSD_CONTRACT, ERC20_ABI, signer);
    try {
      const tx = busdContract.connect(signer);
      const data = await tx.approve(
        METAFOUNDERS_PAYMENT_CONTRACT,
        ethers.utils.parseUnits(_amount.toString())
      );
      await data.wait();
      return data.hash;
    } catch (e) {
      throw new Error("Error approving the spender the right amount");
    }
  } else if (_currency === "USDT") {
    const usdtContract = new ethers.Contract(USDT_CONTRACT, ERC20_ABI, signer);
    try {
      const tx = usdtContract.connect(signer);
      const data = await tx.approve(
        METAFOUNDERS_PAYMENT_CONTRACT,
        ethers.utils.parseUnits(_amount.toString())
      );
      await data.wait();
      return data.hash;
    } catch (e) {
      throw new Error("Error approving the spender the right amount");
    }
  } else {
    throw new Error("Currency not supported");
  }
};


const _getLandsToSend = async (lands: number) => {
  const availableLands = await LANDIAN_WITH_RPC.tokensOfOwner(LANDER_ADDRESS);
  if (availableLands.length < lands) {
    throw new Error('Lander has no lands');
  }
  return availableLands
    .slice(0, lands)
    .map((v: any) => Number(v));
}

export const buyPackage = async (
  lands: number,
  price: number,
  uri: string,
  currency: string,
  amountMT: number,
  amountMP: number,
  walletConnectProvider: any | null) => {
  //@ts-ignore
  const provider = new ethers.providers.Web3Provider(walletConnectProvider ? walletConnectProvider : window.ethereum);
  const signer = provider.getSigner();
  const METAFOUNDERS = new ethers.Contract(METAFOUNDERS_PAYMENT_CONTRACT, METAFOUNDERS_ABI, signer);
  try {

    const landsToSend = await _getLandsToSend(lands);
    console.log("landsToSend", landsToSend);
    console.log(currency.toUpperCase(),
      ethers.utils.parseUnits(price.toString()),
      uri,
      LANDER_ADDRESS,
      landsToSend,
      ethers.utils.parseUnits(amountMP.toString()),
      ethers.utils.parseUnits(amountMT.toString()))
    const tx = await METAFOUNDERS.connect(signer).buyPackage(
      currency.toUpperCase(),
      ethers.utils.parseUnits(price.toString()),
      uri,
      LANDER_ADDRESS,
      landsToSend,
      ethers.utils.parseUnits(amountMP.toString()),
      ethers.utils.parseUnits(amountMT.toString())
    );
    console.log(tx);
    const r = await tx.wait();
    console.log(r);
    return {
      type: currency.toUpperCase(),
      transaction_hash: tx.hash,
      chainId: tx.chainId,
      price_package: price,
      metadata: uri,
      lands: landsToSend,
      megaProject: amountMP,
      metaToken: amountMT
    };
  } catch (e: any) {
    throw new Error(e);
  }
}

export const checkFunds = async () => {
  const lands = await LANDIAN_WITH_RPC.tokensOfOwner(LANDER_ADDRESS);
  const mega_project_tokens = await METAFOUNDERS_WITH_RPC.getMegaProjectBalance();
  const meta_tokens = await METAFOUNDERS_WITH_RPC.getMetaTokenBalance();
  return {
    lands: lands.length,
    mega_project_tokens: Number(ethers.utils.formatEther(mega_project_tokens)),
    meta_tokens: Number(ethers.utils.formatEther(meta_tokens))
  }
}

export const getUserTokens = async (wallet: string) => {
  const lands = await LANDIAN_WITH_RPC.balanceOf(wallet);
  const mega_project_tokens = await MEGAPROJECTS_WITH_RPC.balanceOf(wallet);
  const meta_tokens = await METATOKENS_WITH_RPC.balanceOf(wallet);

  return {
    lands: Number(lands),
    mega_project_tokens: Number(ethers.utils.formatEther(mega_project_tokens)),
    meta_tokens: Number(ethers.utils.formatEther(meta_tokens))
  }
}