# NFT project based on OpenZeppelin

This project is the NFT project based on OpenZeppelin build with Truffle, and the resources are stored at IPFS. The project complies with the ERC721 standard and can be discovered and traded on the Opensea platform. It is based on the OpenZeppelin ERC721Enumerable and implements some features that I observe and nessary. These features are listed below.

- It should be able to mint.
- It should be able to set up the total supply.
- It should be able to set whether to sell or not now.
- It should be able to pause when some critical situation happens.
- It should be able to reveal. (blind box feature)
- The contract's builder can withdraw token from contract.
- It should be able to set up the max count when the user mints each time.
- It should be able to set up the max count each user owns.
- Some operations are performed only by the contract owner definitially. 

If you are interested in the project, there are two other extending projects based on the project.
- [Upgradable NFT based on OpenZeppelin](https://github.com/pinkyTseng/UpgradableNFT)
- [NFT with Test and through some automatic analysis tools](https://github.com/pinkyTseng/NFTwithTest)