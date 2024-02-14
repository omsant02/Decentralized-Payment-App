// SPDX-License-Identifier: Unlicensed

pragma solidity >=0.7.0;

contract paypal {
    event transactions(address indexed from, address to, uint amount, string symbol);
    event recipeints(address indexed reecipientOf, address recipient, string recipientName);

    function _transfer(address payable _to, string memory symbol) public payable {
        _to.transfer(msg.value);
        emit transactions(msg.sender, _to, msg.value, symbol);
    }

    function saveTx(address from, address to, uint amount, string memory symbol) public {
        emit transactions(from, to, amount, symbol);
    }

    function addRecipient(address recipient, string memory name) public {
        emit recipeints(msg.sender, recipient, name);
    } 
}

// 0x04694435FffB6A91F4e6424feA06d34D3efF21eF-sepolia 
// 0x86334ef4CfaF674c501E3768E68A6AaE56f5a6b4-poly mum