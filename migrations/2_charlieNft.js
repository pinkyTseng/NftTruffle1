const CharlieNft = artifacts.require("CharlieNft");

module.exports = function (deployer) {
  deployer.deploy(CharlieNft, "charlie NFTt3", "NCT3");
};
