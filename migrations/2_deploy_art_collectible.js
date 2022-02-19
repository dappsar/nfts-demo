const etmCollectible = artifacts.require('etmCollectible');

module.exports = function (deployer) {
  deployer.deploy(etmCollectible);
};
