async function main() {
    const Token = await ethers.getContractFactory("Token");
 
    // Start deployment, returning a promise that resolves to a contract object
    const mlbToken = await Token.deploy(1000);
    console.log("Contract deployed to address:", mlbToken.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });