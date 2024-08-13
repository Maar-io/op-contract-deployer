// npx hardhat ignition deploy ignition/modules/L1OPToken.ts --network sepolia --verify

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BRIDGE = "0x5a6d4aAD601fE380995d93475A8b7f764F703eE4";
const REMOTE_TOKEN = "0xc3E910fb9Fc7ecf4Fdae30C0A0Bf1BC24113784e"
const NAME = "L1OPToken";
const SYMBOL = "L1T";

const TokenModule = buildModule("TokenModule", (m) => {
  const artifact = m.contract("L1OPToken", [BRIDGE, REMOTE_TOKEN, NAME, SYMBOL]);

  return { artifact };
});

export default TokenModule;
