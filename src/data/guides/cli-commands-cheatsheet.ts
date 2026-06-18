export interface CliCommand {
  name: string;
  description: string;
  category: 'setup' | 'management' | 'distribution' | 'workflow' | 'integration';
  keyFlags?: string[];
  subcommands?: string[];
  example?: string;
}

export const cliCommandsCheatsheet: CliCommand[] = [
  // --- Setup & Installation ---
  {
    name: 'vitnew',
    description: 'Bootstrap a new Vit Engine project with interactive version selection',
    category: 'setup',
    keyFlags: ['--kit <engineer|marketing>', '-y, --yes', '--beta', '--use-git', '--dir <dir>', '-r, --release <version>'],
    example: 'vitnew --kit engineer --yes',
  },
  {
    name: 'vitinit',
    description: 'Initialize or update Vit Engine in an existing project',
    category: 'setup',
    keyFlags: ['--kit <kit>', '-g, --global', '--fresh', '--force', '--install-skills', '-y, --yes', '--beta', '--sync', '-r, --release <version>', '--skip-setup'],
    example: 'vitinit -g --kit engineer --yes --install-skills',
  },
  {
    name: 'vitupdate',
    description: 'Update the Vit Engine CLI tool itself',
    category: 'setup',
    keyFlags: ['--check', '-y, --yes', '-d, --dev', '-r, --release <version>'],
    example: 'vitupdate --check',
  },
  {
    name: 'vitsetup',
    description: 'Configure API keys and optional packages',
    category: 'setup',
    keyFlags: ['--global', '--skip-packages', '--dir <dir>'],
    example: 'vitsetup --global',
  },
  {
    name: 'vitversions',
    description: 'List available Vit Engine repository versions',
    category: 'setup',
    keyFlags: ['--kit <kit>', '--limit <n>', '--all'],
    example: 'vitversions --kit engineer --limit 10',
  },
  // --- Management ---
  {
    name: 'vitdoctor',
    description: 'Comprehensive health check for Vit Engine installation',
    category: 'management',
    keyFlags: ['--fix', '--report', '--check-only', '--json', '--full'],
    example: 'vitdoctor --fix',
  },
  {
    name: 'vitconfig',
    description: 'Manage configuration and launch dashboard UI',
    category: 'management',
    subcommands: ['ui', 'get', 'set', 'show'],
    keyFlags: ['-g, --global', '-l, --local', '--json', '--port <port>', '--host <host>', '--no-open', '--dev'],
    example: 'vitconfig ui',
  },
  {
    name: 'vitprojects',
    description: 'Manage local project registry entries',
    category: 'management',
    subcommands: ['list', 'add', 'remove'],
    keyFlags: ['--alias <alias>', '--pinned', '--tags <tags>', '--json'],
    example: 'vitprojects list',
  },
  {
    name: 'vitbackups',
    description: 'List, restore, and prune recovery backups',
    category: 'management',
    subcommands: ['list', 'restore', 'prune'],
    keyFlags: ['--limit <n>', '--keep <n>', '--all', '-y, --yes', '--json'],
    example: 'vitbackups list',
  },
  {
    name: 'vituninstall',
    description: 'Remove Vit Engine installations safely',
    category: 'management',
    keyFlags: ['-l, --local', '-g, --global', '-A, --all', '-k, --kit <type>', '--dry-run', '--force-overwrite', '-y, --yes'],
    example: 'vituninstall --local --dry-run',
  },
  // --- Distribution ---
  {
    name: 'vitskills',
    description: 'Install/uninstall skills to coding agents; list active Claude Code skills and registry-managed installations',
    category: 'distribution',
    keyFlags: ['-n, --name <skill>', '-a, --agent <agents>', '-g, --global', '-l, --list', '--installed', '-u, --uninstall', '--search <query>', '--catalog', '--validate', '--sync', '-y, --yes'],
    example: 'vitskills -n ui-ux-pro-max -a cursor --global',
  },
  {
    name: 'vitagents',
    description: 'Install/uninstall agents to coding providers',
    category: 'distribution',
    keyFlags: ['-n, --name <agent>', '-a, --agent <providers>', '-g, --global', '-l, --list', '--all', '--sync', '-y, --yes'],
    example: 'vitagents -l --installed',
  },
  {
    name: 'vitcommands',
    description: 'Install/uninstall commands to coding providers',
    category: 'distribution',
    keyFlags: ['-n, --name <cmd>', '-a, --agent <providers>', '-g, --global', '-l, --list', '--all', '--sync', '-y, --yes'],
    example: 'vitcommands -l --installed',
  },
  {
    name: 'vitmigrate',
    description: 'Migrate agents, commands, skills, config, rules, hooks to other providers',
    category: 'distribution',
    keyFlags: ['-a, --agent <providers>', '--all', '--install', '--reconcile', '--dry-run', '--only-*', '--skip-*', '--config', '--rules', '--hooks', '-g, --global', '-y, --yes', '--force', '--respect-deletions'],
    example: 'vitmigrate -a codex --dry-run',
  },
  // --- Workflow ---
  {
    name: 'vitplan',
    description: 'Plan management: parse, validate, status, kanban, create',
    category: 'workflow',
    subcommands: ['parse', 'validate', 'status', 'kanban', 'create', 'check', 'uncheck', 'add-phase'],
    keyFlags: ['--json', '--strict', '-g, --global', '--title', '--phases'],
    example: 'vitplan status',
  },
  {
    name: 'vitcontent',
    description: 'Multi-channel content automation engine',
    category: 'workflow',
    subcommands: ['start', 'stop', 'status', 'logs', 'setup', 'queue', 'approve', 'reject'],
    keyFlags: ['--dry-run', '--verbose', '--force', '--tail', '--reason <reason>'],
    example: 'vitcontent status',
  },
  // --- Integration ---
  {
    name: 'vitapi',
    description: 'Interact with Vit Engine API and proxy services',
    category: 'integration',
    subcommands: ['setup', 'status', 'services', 'vidcap', 'reviewweb', 'proxy'],
    keyFlags: ['--json', '--method', '--locale', '--format'],
    example: 'vitapi status',
  },
  {
    name: 'vitwatch',
    description: 'Watch GitHub issues and auto-respond with AI',
    category: 'integration',
    keyFlags: ['--interval <ms>', '--dry-run', '--force', '--verbose'],
    example: 'vitwatch --dry-run --verbose',
  },
];
