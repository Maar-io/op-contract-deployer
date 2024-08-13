// npx hardhat ignition deploy ignition/modules/TestL2Token.ts --network osaki --verify

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BRIDGE = "0x4200000000000000000000000000000000000010";
const REMOTE_TOKEN = "0x08573Ff5695d96655cbCCBfC02c967DC91f254a6"
const NAME = "TestL2Token";
const SYMBOL = "L2T";

const TokenModule = buildModule("TokenModule", (m) => {
  const artifact = m.contract("TestL2Token", [BRIDGE, REMOTE_TOKEN, NAME, SYMBOL]);

  return { artifact };
});

export default TokenModule;
