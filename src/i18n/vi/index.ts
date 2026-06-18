// VI translations index - re-exports all namespaces
// Đã xóa: session-recovery, ide-config (guide bị prune)
import { commands } from './commands';
import { ccs } from './ccs';
import { uiux } from './uiux';
import { guides } from './guides';
import { cli } from './cli';
import { token_tips } from './token-tips';
import { coexistence } from './coexistence';
import { workflows } from './workflows';
import { happy_ccs } from './happy-ccs';
import { ck_with_codex } from './ck-with-codex';
import { pricing } from './pricing';
import { common } from './common';
import { deals } from './deals';

export default {
  ...commands,
  ...ccs,
  ...uiux,
  ...guides,
  ...cli,
  ...token_tips,
  ...coexistence,
  ...workflows,
  ...happy_ccs,
  ...ck_with_codex,
  ...pricing,
  ...common,
  ...deals,
} as const;
