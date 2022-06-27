const { ethers } = require('ethers')
const { abi: UniswapV3Factory } = require('@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json')
require('dotenv').config()
const INFURA_URL_TESTNET = process.env.API_URL

const address0 = '0xeBC396B7333c6B72bB51e6Cf49eCa04d63af54bc'
const address1 = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
const factoryAddress = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET)

  const factoryContract = new ethers.Contract(
    factoryAddress,
    UniswapV3Factory,
    provider
  )

  const poolAddress = await factoryContract.getPool(address0, address1, 10000)
  console.log('poolAddress', poolAddress)

}

main()