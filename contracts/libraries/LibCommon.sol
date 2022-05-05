// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./storage.sol";

library LibCommon {

    function appStorage() internal pure returns (AppStorageOpen storage appStore) {
        assembly {
            appStore.slot := 0
        }
    }
}
