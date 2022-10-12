import { MaxInt256 } from "@ethersproject/constants";
import { ethers } from "ethers";

const url = "http://localhost:7545"
const provider = new ethers.providers.JsonRpcProvider(url);

const key2 = '0x7313de68a673fecbf1962ac6c68563c739c832a896256674cf12b3650b5ece47'
const wallet2 = new ethers.Wallet(key2, provider)

const mnemnic2 = 'simple camp mandate caught settle vanish flame large void screen habit sample'
const wallet22 = ethers.Wallet.fromMnemonic(mnemnic2)
const wallet1 = wallet22.connect(provider)

const main = async() => {
    const addr1 = await wallet1.getAddress()
    const balance1 = await wallet1.getBalance()

    const addr2 = await wallet2.getAddress()
    const balance2 = await wallet2.getBalance()

    console.log(`wallet1:${await wallet1.getBalance()} ${await wallet1.getTransactionCount()}
wallet2:${await wallet2.getBalance()} ${await wallet2.getTransactionCount()}`)

    const tx1 = {
        to: addr2,
        value: ethers.utils.parseEther("0.02")
    }

    const receipt = await wallet1.sendTransaction(tx1)
    await receipt.wait()

    console.log(`wallet1:${await wallet1.getBalance()} ${await wallet1.getTransactionCount()}
wallet2:${await wallet2.getBalance()} ${await wallet2.getTransactionCount()}`)
}
main()

