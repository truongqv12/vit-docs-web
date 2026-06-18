// Dữ liệu cheatsheet cho 6 lệnh vit CLI thật
// Verified từ vit-cli/src/index.ts
export interface CliCommand {
  name: string;
  description: string;
  category: 'setup' | 'management' | 'distribution' | 'workflow' | 'integration';
  keyFlags?: string[];
  subcommands?: string[];
  example?: string;
}

export const cliCommandsCheatsheet: CliCommand[] = [
  // --- Cài đặt & Khởi tạo ---
  {
    name: 'vit init',
    description: 'Cài Vit Engine vào thư mục .claude/ của project hiện tại',
    category: 'setup',
    keyFlags: ['--token <t>', '--force', '--install-skills', '-y, --yes', '--with-sudo'],
    example: 'vit init --install-skills --yes',
  },
  {
    name: 'vit update',
    description: 'Cập nhật Vit Engine lên phiên bản mới nhất',
    category: 'setup',
    keyFlags: ['--token <t>', '--force', '--dry-run', '--install-skills', '-y, --yes', '--with-sudo'],
    example: 'vit update --dry-run',
  },
  // --- Quản lý ---
  {
    name: 'vit doctor',
    description: 'Kiểm tra môi trường: gh token, quyền engine, cấu trúc .claude/',
    category: 'management',
    keyFlags: [],
    example: 'vit doctor',
  },
  {
    name: 'vit version',
    description: 'In phiên bản CLI và Vit Engine đã cài',
    category: 'management',
    keyFlags: [],
    example: 'vit version',
  },
  // --- Workflow ---
  {
    name: 'vit plan',
    description: 'Quản lý plan: tạo, theo dõi và cập nhật tiến độ',
    category: 'workflow',
    subcommands: ['create', 'check', 'uncheck', 'status'],
    keyFlags: ['--title <title>', '--phases <n>', '--dir <dir>', '--start'],
    example: 'vit plan check <task-id>',
  },
  // --- Phân phối ---
  {
    name: 'vit migrate',
    description: 'Xuất .claude/ sang codex, opencode hoặc antigravity',
    category: 'distribution',
    keyFlags: [],
    example: 'vit migrate',
  },
];
