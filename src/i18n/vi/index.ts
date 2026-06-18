// VI translations index - re-exports all namespaces
// Đã xóa: session-recovery, ide-config (guide bị prune)
// Đã xóa: ccs, ck-with-codex (trang đã xóa, không còn dùng)
import { commands } from './commands';
import { uiux } from './uiux';
import { guides } from './guides';
import { cli } from './cli';
import { token_tips } from './token-tips';
import { coexistence } from './coexistence';
import { workflows } from './workflows';
import { happy_ccs } from './happy-ccs';
import { pricing } from './pricing';
import { common } from './common';
import { deals } from './deals';

export default {
  ...commands,
  ...uiux,
  ...guides,
  ...cli,
  ...token_tips,
  ...coexistence,
  ...workflows,
  ...happy_ccs,
  ...pricing,
  ...common,
  ...deals,
} as const;
