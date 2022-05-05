// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { AppStorageOpen, LibCommon } from "../libraries/LibCommon.sol";

contract Facet1 {

    function setStr1(string memory str) external {
        AppStorageOpen storage appStore = LibCommon.appStorage();
        appStore.str1 = str;
    }

    function setStr2() external {
        AppStorageOpen storage appStore = LibCommon.appStorage();
        appStore.str2 = "store string 2";
    }

}
