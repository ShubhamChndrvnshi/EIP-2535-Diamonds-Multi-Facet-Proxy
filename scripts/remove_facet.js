const { getSelectors, FacetCutAction } = require('./libraries/diamond.js');

task("removefacets", "Adds one or more facets to diamond")
  .addParam("facetname", "Facet name")
  .addParam("diamondaddress", "Diamond address")
  .setAction(async (taskArgs, hre) => {
    const { ethers } = hre;
    const DiamondCutFacet = await ethers.getContractAt('DiamondCutFacet', taskArgs.diamondaddress);
    const Facet = await ethers.getContractFactory(taskArgs.facetname)
    // const facet = await testFacet1.deploy()
    // await facet.deployed()

    const tx = await DiamondCutFacet.diamondCut(
        [{
            facetAddress: ethers.constants.AddressZero,
            action: FacetCutAction.Remove,
            functionSelectors: getSelectors(Facet)
        }], ethers.constants.AddressZero, "0x");
    await tx.wait();
    console.log("Facet remove Tx: ", tx.hash);
  });
module.exports = {};
