const { getSelectors, FacetCutAction } = require('./libraries/diamond.js');

task("addFacets", "Adds one or more facets to diamond")
    .addParam("facetname", "Facet name")
    .addParam("diamondaddress", "Diamond address")
    .setAction(async (taskArgs, hre) => {
        const { ethers } = hre;

        const DiamondCutFacet = await ethers.getContractAt('DiamondCutFacet', taskArgs.diamondaddress);
        const Facet = await ethers.getContractFactory(taskArgs.facetname)
        const facet = await Facet.deploy()
        await facet.deployed()

        const tx = await DiamondCutFacet.diamondCut(
            [{
                facetAddress: facet.address,
                action: FacetCutAction.Add,
                functionSelectors: getSelectors(Facet)
            }], ethers.constants.AddressZero, "0x");
        await tx.wait();
        console.log("Facet add Tx: ", tx.hash);
    });
module.exports = {};
