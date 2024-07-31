// npx hardhat ignition deploy ignition/modules/TestL2Token.ts --network optimismSepolia --verify

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BRIDGE = "0x4200000000000000000000000000000000000010";
const REMOTE_TOKEN = "0x5589BB8228C07c4e15558875fAf2B859f678d129"
const NAME = "TestL2Token";
const SYMBOL = "TST";

const TokenModule = buildModule("TokenModule", (m) => {
  const artifact = m.contract("TestL2Token", [BRIDGE, REMOTE_TOKEN, NAME, SYMBOL]);

  return { artifact };
});

export default TokenModule;
