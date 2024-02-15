const { ethers } = require("ethers");
const abi = require("./paypal/paypal.json");

const provider = new ethers.providers.JsonRpcProvider("");

// Contracts
const paypalContract = new ethers.Contract(
  "0x86334ef4CfaF674c501E3768E68A6AaE56f5a6b4",
  abi,
  provider
);

async function getData() {
  const get = await paypalContract.filters.recipeints();
  const trans = await paypalContract.queryFilter(get);
  console.log(trans);
}

getData();
