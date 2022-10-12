import { ethers } from "ethers";

const url = "http://localhost:7545"
const provider = new ethers.providers.JsonRpcProvider(url);

const main = async () => {
    const balance = await provider.getBalance(`0xD1f832eDE8404A152963911586d2dB2d6a90A6D5`);
    console.log(`ETH Balance of main: ${ethers.utils.formatEther(balance)} ETH`);

    const network = await provider.getNetwork();
    console.log(network)

    const blockNumber = await provider.getBlockNumber();
    console.log(`blockNumber: ${blockNumber}`)

    const gasPrice = await provider.getGasPrice()
    console.log(`gasPrice: ${gasPrice}`)
}
main()