import { MaxInt256 } from "@ethersproject/constants";
import { Contract, ethers } from "ethers";

const url = "http://localhost:7545"
const provider = new ethers.providers.JsonRpcProvider(url);

const contractAddr = '0x0261218D1C84c07b4E46384d1c65cf658C8676d3'

const key2 = '0x7313de68a673fecbf1962ac6c68563c739c832a896256674cf12b3650b5ece47'
const wallet2 = new ethers.Wallet(key2, provider)

const mnemnic2 = 'simple camp mandate caught settle vanish flame large void screen habit sample'
const wallet22 = ethers.Wallet.fromMnemonic(mnemnic2)
const wallet1 = wallet22.connect(provider)

const addr1 = await wallet1.getAddress()
const balance1 = await wallet1.getBalance()
const addr2 = await wallet2.getAddress()
const balance2 = await wallet2.getBalance()

const abiWETH = [
    "function mint(uint amount) external",
    "function burn(uint amount) external",
    "function balanceOf(address account) external view returns (uint256)",
]
const contractERC20 = new ethers.Contract(contractAddr, abiWETH, wallet2)

const main = async() => {
    console.log(`before: ${await contractERC20.balanceOf(addr2)}`)
    const tx1 = await contractERC20.mint("100000")
    tx1.wait()
    console.log(`after: ${await contractERC20.balanceOf(addr2)}`)
}
main()