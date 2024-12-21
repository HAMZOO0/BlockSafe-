// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract CIDStorage {
    string public cid;

    // Event to notify when CID is updated
    event CIDUpdated(string newCID);

    // Function to set the CID
    function setCID(string memory _cid) public {
        cid = _cid;
        emit CIDUpdated(_cid); // Emit an event when the CID is updated
    }

    // Function to get the CID
    function getCID() public view returns (string memory) {
        return cid;
    }
}
