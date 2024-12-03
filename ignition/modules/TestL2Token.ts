// npx hardhat ignition deploy ignition/modules/TestL2Token.ts --network soneium

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BRIDGE = "0x4200000000000000000000000000000000000010";
const REMOTE_TOKEN = "0x6d2Fefe017BE997C2000DEf7ca7856251a6B1b7f"
const NAME = "TestL2Token";
const SYMBOL = "TST";

const TokenModule = buildModule("TokenModule", (m) => {
  const artifact = m.contract("TestL2Token", [BRIDGE, REMOTE_TOKEN, NAME, SYMBOL]);

  return { artifact };
});

export default TokenModule;
