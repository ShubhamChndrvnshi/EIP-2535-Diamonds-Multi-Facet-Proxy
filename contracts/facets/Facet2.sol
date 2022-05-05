// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { AppStorageOpen, LibCommon } from "../libraries/LibCommon.sol";

contract Facet2 {

    function getStr1() external view returns(string memory){
        AppStorageOpen memory appStore = LibCommon.appStorage();
        return appStore.str1;
    }

    function getStr2() external view returns(string memory){
        AppStorageOpen memory appStore = LibCommon.appStorage();
        return appStore.str2;
    }

}
