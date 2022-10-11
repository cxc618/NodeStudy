import { MaxInt256 } from "@ethersproject/constants";
import { ethers } from "ethers";

const url = "http://localhost:7545"
const provider = new ethers.providers.JsonRpcProvider(url);

const address = `0x2d46FA20C0b36059F37E2B2A01E46af4a36F814e`
const abiDes = [
    "function getBalance111() view public returns (uint)",
];
const contractDes = new ethers.Contract(address, abiDes, provider)

const main = async() => {
    console.log(`${JSON.stringify(contractDes)}`)
    const name = await contractDes.name()
    console.log(`${name}`)
}
main()