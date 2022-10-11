import { ethers } from "ethers";

const url = "http://localhost:7545"
const provider = new ethers.providers.JsonRpcProvider(url);

const main = async () => {
    const balance = await provider.getBalance(`0xAE3544Bd7EBdFC24CC3b9DeFea3f480024191102`);
    console.log(`ETH Balance of main: ${ethers.utils.formatEther(balance)} ETH`);

    const network = await provider.getNetwork();
    console.log(network)

    const blockNumber = await provider.getBlockNumber();
    console.log(`blockNumber: ${blockNumber}`)

    const gasPrice = await provider.getGasPrice()
    console.log(`gasPrice: ${gasPrice}`)
}
main()