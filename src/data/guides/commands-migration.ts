// Commands Migration Data
// Extracted from commands-migration-table.astro to separate data from presentation
// Phase 1 of modularization: src/data/guides/commands-migration.ts

export interface MigrationRow {
  old: string;
  /** new command - uses 'ck:' prefix by default unless prefixType is 'purple' (ckm:) */
  new: string;
  /** 'teal' = Engineer Kit (ck:), 'purple' = Marketing Kit (ckm:) */
  prefixType?: 'teal' | 'purple';
  /** optional section divider label rendered as a colspan row */
  dividerLabel?: string;
}

// ─── Engineer Kit: Always-visible rows ───────────────────────────────────────
export const engineerMigrationAlways: MigrationRow[] = [
  { old: '/debug', new: '/vit:debug' },
  { old: '/plan', new: '/vit:plan' },
  { old: '/code @plan.md', new: '/vit:cook @plan.md' },
  { old: '/code:no-test', new: '/vit:cook add footer --no-test' },
  { old: '/code:parallel', new: '/vit:cook refactor api --parallel' },
  { old: '/code:auto', new: '/vit:cook add pagination --auto' },
  { old: '/plan:fast', new: '/vit:plan --fast add auth' },
  { old: '/plan:hard', new: '/vit:plan --hard migrate to microservices' },
];

// ─── Engineer Kit: Expandable extra rows ─────────────────────────────────────
export const engineerMigrationExtra: MigrationRow[] = [
  { old: '/plan:archive', new: '/vit:plan archive' },
  { old: '/plan:ci', new: '/vit:fix CI build failing --auto' },
  { old: '/fix:ci', new: '/vit:fix deploy pipeline error --auto' },
  { old: '/fix:test', new: '/vit:fix auth tests failing --review' },
  { old: '/fix:types', new: '/vit:fix type errors in utils --quick' },
  { old: '/fix:ui', new: '/vit:fix layout broken on mobile --parallel' },
  { old: '/git:cm', new: '/vit:git cm' },
  { old: '/git:cp', new: '/vit:git cp' },
  { old: '/git:pr', new: '/vit:git pr' },
  { old: '/git:merge', new: '/vit:git merge' },
  { old: '/design:video', new: '/vit:remotion [video or component]' },
  { old: '/design:3d', new: '/vit:threejs rotating globe with markers' },
  { old: '/design:screenshot', new: '/vit:frontend-design' },
  { old: '/design:describe', new: '/vit:frontend-design' },
  { old: '/review:codebase', new: '/vit:code-review codebase' },
  { old: '/review:codebase:parallel', new: '/vit:code-review codebase parallel' },
  { old: '/docs:init', new: '/vit:docs init' },
  { old: '/docs:update', new: '/vit:docs update' },
  { old: '/docs:summarize', new: '/vit:docs summarize' },
  { old: '/content:blog', new: '/vit:copywriting blog [context]' },
  { old: '/content:landing', new: '/vit:copywriting landing [context]' },
  { old: '/skill:create foo', new: '/vit:skill-creator foo' },
  { old: '/integrate:stripe', new: '/vit:payment-integration stripe checkout' },
  { old: '/integrate:sepay', new: '/vit:payment-integration sepay webhook' },
  { old: '/bootstrap:auto', new: '/vit:bootstrap --auto' },
  { old: '/bootstrap:auto:fast', new: '/vit:bootstrap --fast' },
  { old: '/bootstrap:auto:parallel', new: '/vit:bootstrap --parallel' },
  { old: '/test:ui', new: '/vit:test ui [url]' },
];

// ─── Marketing Kit: Always-visible rows ──────────────────────────────────────
export const marketingMigrationAlways: MigrationRow[] = [
  { old: '/mkt:plan', new: '/vit:plan [task]', prefixType: 'purple' },
  { old: '/mkt:plan:fast', new: '/vit:plan --fast [task]', prefixType: 'purple' },
  { old: '/mkt:plan:hard', new: '/vit:plan --hard [task]', prefixType: 'purple' },
  { old: '/mkt:plan:cro', new: '/vit:plan --cro landing-page', prefixType: 'purple' },
  { old: '/mkt:write:good', new: '/vit:write:good [topic]', prefixType: 'purple' },
  { old: '/mkt:write:fast', new: '/vit:write:fast [topic]', prefixType: 'purple' },
];

// ─── Marketing Kit: Expandable extra rows ────────────────────────────────────
export const marketingMigrationExtra: MigrationRow[] = [
  { old: '/mkt:write:cro', new: '/vit:write:cro [page-url]', prefixType: 'purple' },
  { old: '/mkt:write:enhance', new: '/vit:write:enhance [file]', prefixType: 'purple' },
  { old: '/mkt:write:blog', new: '/vit:write:blog [topic]', prefixType: 'purple' },
  { old: '/mkt:write:audit', new: '/vit:write:audit', prefixType: 'purple' },
  { old: '/mkt:write:publish', new: '/vit:write:publish [file]', prefixType: 'purple' },
  { old: '/mkt:campaign:create', new: '/vit:campaign:create [name]', prefixType: 'purple' },
  { old: '/mkt:campaign:status', new: '/vit:campaign:status', prefixType: 'purple' },
  { old: '/mkt:campaign:analyze', new: '/vit:campaign:analyze [period]', prefixType: 'purple' },
  { old: '/mkt:campaign:email', new: '/vit:campaign:email [series]', prefixType: 'purple' },
  { old: '/mkt:seo:keywords', new: '/vit:seo:keywords [query]', prefixType: 'purple' },
  { old: '/mkt:seo:audit', new: '/vit:seo:audit [url]', prefixType: 'purple' },
  { old: '/mkt:seo:pseo', new: '/vit:seo:pseo [template]', prefixType: 'purple' },
  { old: '/mkt:email:flow', new: '/vit:email:flow [type]', prefixType: 'purple' },
  { old: '/mkt:email:sequence', new: '/vit:email:sequence [type]', prefixType: 'purple' },
  { old: '/mkt:social:schedule', new: '/vit:social:schedule', prefixType: 'purple' },
  { old: '/mkt:competitor', new: '/vit:competitor [url]', prefixType: 'purple' },
  { old: '/mkt:video:create', new: '/vit:video:create [topic]', prefixType: 'purple' },
  { old: '/mkt:video:script', new: '/vit:video:script [topic]', prefixType: 'purple' },
  { old: '/mkt:youtube:blog', new: '/vit:youtube:blog [url]', prefixType: 'purple' },
  { old: '/mkt:brand:update', new: '/vit:brand:update [element]', prefixType: 'purple' },
  { old: '/mkt:docs:init', new: '/vit:docs:init', prefixType: 'purple' },
  { old: '/mkt:docs:update', new: '/vit:docs:update', prefixType: 'purple' },
  { old: '/fixing', new: '/vit:fix [issue] --auto|--review|--quick' },
  { old: '/test-orchestrator', new: '/vit:test [ui|workflow] [target]' },
  { old: '/mkt:preview', new: '/vit:preview [path] --explain|--slides|--diagram|--ascii', prefixType: 'purple' },
  { old: '/mkt:storage', new: '/vit:storage', prefixType: 'purple' },
  { old: '/mkt:storage:list', new: '/vit:storage:list', prefixType: 'purple' },
  { old: '/mkt:storage:sync', new: '/vit:storage:sync', prefixType: 'purple' },
  { old: '/mkt:storage:upload', new: '/vit:storage:upload', prefixType: 'purple' },
  { old: '/mkt:storage:url', new: '/vit:storage:url', prefixType: 'purple' },
  { old: '/mkt:dashboard', new: '/vit:dashboard', prefixType: 'purple' },
  { old: '/mkt:dashboard:check', new: '/vit:dashboard:check', prefixType: 'purple' },
  { old: '/mkt:analyze:report', new: '/vit:analyze:report', prefixType: 'purple' },
  { old: '/mkt:init', new: '/vit:init', prefixType: 'purple' },
  { old: '/mkt:ask [question]', new: '/vit:ask [question]', prefixType: 'purple' },
  { old: '/mkt:funnel [action]', new: '/vit:funnel [action] [type]', prefixType: 'purple' },
  { old: '/mkt:persona [action]', new: '/vit:persona [action]', prefixType: 'purple' },
  { old: '/mkt:plan:parallel', new: '/vit:plan --parallel [task]', prefixType: 'purple' },
  { old: '/mkt:plan:archive', new: '/vit:plan archive', prefixType: 'purple' },
  { old: '/mkt:plan:validate', new: '/vit:plan validate', prefixType: 'purple' },
  { old: '/mkt:write:formula [type]', new: '/vit:copywriting formula [type]' },
  { old: '/mkt:video:storyboard', new: '/vit:video:storyboard [topic]', prefixType: 'purple' },
  { old: '/mkt:youtube:infographic', new: '/vit:youtube:infographic [url]', prefixType: 'purple' },
  { old: '/mkt:youtube:social', new: '/vit:youtube:social [url]', prefixType: 'purple' },
  { old: '/mkt:docs:summarize', new: '/vit:docs:summarize', prefixType: 'purple' },
  { old: '/mkt:docs:llms', new: '/vit:docs:llms', prefixType: 'purple' },
  { old: '/mkt:hub', new: '/vit:hub [--stop|--scan]', prefixType: 'purple' },
  { old: '/mkt:slides:create', new: '/vit:slides:create [topic]', prefixType: 'purple' },
  { old: '/mkt:skill:create', new: '/vit:skill:create [name]', prefixType: 'purple' },
  { old: '/mkt:use-mcp', new: '/vit:use-mcp', prefixType: 'purple' },
  { old: '/mkt:journal', new: '/vit:journal', prefixType: 'purple' },
  { old: '/mkt:kanban', new: '/vit:kanban', prefixType: 'purple' },
  { old: '/mkt:watzup', new: '/vit:watzup', prefixType: 'purple' },
  { old: '/mkt:worktree', new: '/vit:worktree', prefixType: 'purple' },
  { old: '/mkt:plan:two', new: '/vit:plan --two [task]', prefixType: 'purple' },
  { old: '/mkt:plan:ci', new: '/vit:fix ci [url]', prefixType: 'purple' },
  { old: '/mkt:ck-help', new: '/vit:ck-help', prefixType: 'purple' },
  { old: '/mkt:write:blog-youtube', new: '/vit:write:blog-youtube [url]', prefixType: 'purple' },
  { old: '/mkt:skill:add', new: '/vit:skill:add [file]', prefixType: 'purple' },
  { old: '/mkt:skill:fix-logs', new: '/vit:skill:fix-logs', prefixType: 'purple' },
  { old: '/mkt:skill:optimize', new: '/vit:skill:optimize [name]', prefixType: 'purple' },
  { old: '/mkt:skill:optimize:auto', new: '/vit:skill:optimize:auto [name]', prefixType: 'purple' },
  { old: '/mkt:skill:plan', new: '/vit:skill:plan [name]', prefixType: 'purple' },
  { old: '/mkt:skill:update', new: '/vit:skill:update [name]', prefixType: 'purple' },
  { old: '/mkt:test:ui', new: '/vit:test:ui [url]' },
  { old: '/mkt:test:workflow', new: '/vit:test:workflow [name]' },
];

// ─── Marketing Kit: Renamed skills section dividers ──────────────────────────
export const marketingRenamedMkt: MigrationRow[] = [
  { old: '/brand-guidelines', new: '/vit:brand', prefixType: 'purple' },
  { old: '/campaign-management', new: '/vit:campaign', prefixType: 'purple' },
  { old: '/competitor-alternatives', new: '/vit:competitor', prefixType: 'purple' },
  { old: '/Debugging', new: '/vit:debugging', prefixType: 'purple' },
  { old: '/email-marketing', new: '/vit:email', prefixType: 'purple' },
  { old: '/seo-optimization', new: '/vit:seo', prefixType: 'purple' },
  { old: '/slides-design', new: '/vit:slides', prefixType: 'purple' },
  { old: '/social-media', new: '/vit:social', prefixType: 'purple' },
  { old: '/video-production', new: '/vit:video', prefixType: 'purple' },
  { old: '/youtube-handling', new: '/vit:youtube', prefixType: 'purple' },
];

export const marketingRenamedShared: MigrationRow[] = [
  { old: '/frontend-dev-guidelines', new: '/vit:frontend-development' },
  { old: '/Problem-Solving Techniques', new: '/vit:problem-solving' },
  { old: '/remotion-best-practices', new: '/vit:remotion' },
];
