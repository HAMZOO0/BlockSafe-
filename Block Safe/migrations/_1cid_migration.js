const CIDStorage = artifacts.require("./cid.sol");

module.exports = async function(deployer) {
  await deployer.deploy(CIDStorage);
};
