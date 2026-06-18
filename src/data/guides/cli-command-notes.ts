import type { Language } from '@/i18n';

// Mô tả chi tiết cho flag và subcommand của 6 lệnh vit thật
const noteText = {
  '--token': ['Provide a personal access token for Vit Engine.', 'Cung cấp token truy cập cá nhân cho Vit Engine.'],
  '--force': ['Bypass soft safeguards where the command allows it.', 'Bỏ qua guard mềm nếu command cho phép.'],
  '--install-skills': ['Install bundled skills during setup.', 'Cài kèm các skills trong lúc setup.'],
  '--yes': ['Skip confirmation prompts for scripted runs.', 'Bỏ qua xác nhận khi chạy tự động.'],
  '-y': ['Skip confirmation prompts for scripted runs.', 'Bỏ qua xác nhận khi chạy tự động.'],
  '--with-sudo': ['Run installation steps with sudo privileges.', 'Chạy bước cài đặt với quyền sudo.'],
  '--dry-run': ['Preview changes without writing them.', 'Xem trước thay đổi, không ghi file.'],
  '--dir': ['Target a specific directory for plan files.', 'Chỉ định thư mục chứa plan files.'],
  '--start': ['Mark plan task as in-progress when checking.', 'Đánh dấu task đang tiến hành khi check.'],
  '--title': ['Set the generated plan title.', 'Đặt title cho plan được tạo.'],
  '--phases': ['Set generated plan phase count or names.', 'Đặt số lượng hoặc tên phase của plan.'],
  create: ['Create a new plan from CLI input.', 'Tạo plan mới từ input CLI.'],
  check: ['Mark a plan task as complete.', 'Đánh dấu task trong plan là hoàn tất.'],
  uncheck: ['Mark a plan task as incomplete.', 'Đánh dấu task trong plan là chưa hoàn tất.'],
  status: ['Show current plan state.', 'Hiển thị trạng thái plan hiện tại.'],
} as const;

const getNoteKey = (raw: string) => {
  const longFlag = raw.match(/--[\w-*]+/)?.[0];
  return longFlag || raw.split(/\s+/)[0];
};

const getNoteDescription = (key: string, lang: Language) => {
  const fallback = lang === 'vi' ? 'Tùy chọn quan trọng của command này.' : 'Important option for this command.';
  const note = noteText[key as keyof typeof noteText];
  return note ? note[lang === 'vi' ? 1 : 0] : fallback;
};

// Phạm vi flag theo từng lệnh vit
const commandFlagScopes: Record<string, Record<string, string>> = {
  'vit plan': {
    '--title': 'create',
    '--phases': 'create',
    '--dir': 'create, check, uncheck, status',
    '--start': 'check',
  },
};

// Ghi chú bổ sung cho từng lệnh vit
const commandNotes: Record<string, [string, string][]> = {
  'vit init': [
    ['Use <code>--force</code> to reinstall even if already installed.', 'Dùng <code>--force</code> để cài lại ngay cả khi đã cài.'],
    ['<code>--install-skills</code> installs bundled skills into <code>.claude/skills/</code>.', '<code>--install-skills</code> cài skills đi kèm vào <code>.claude/skills/</code>.'],
  ],
  'vit update': [
    ['<code>--dry-run</code> shows what would change without applying.', '<code>--dry-run</code> hiển thị thay đổi mà không áp dụng.'],
  ],
  'vit plan': [
    ['Subcommands: <code>create | check | uncheck | status</code>.', 'Subcommands: <code>create | check | uncheck | status</code>.'],
    ['<code>--start</code> marks the task as in-progress (used with <code>check</code>).', '<code>--start</code> đánh dấu task đang thực hiện (dùng với <code>check</code>).'],
  ],
  'vit migrate': [
    ['Exports <code>.claude/</code> to codex, opencode, or antigravity format.', 'Xuất <code>.claude/</code> sang định dạng codex, opencode, hoặc antigravity.'],
  ],
  'vit doctor': [
    ['Checks gh token, engine permissions, and <code>.claude/</code> structure.', 'Kiểm tra gh token, quyền engine, và cấu trúc <code>.claude/</code>.'],
  ],
};

export const getCliCommandNotes = (items: string[], lang: Language, cmdName?: string) =>
  items.map((item) => {
    const key = getNoteKey(item);
    const description = getNoteDescription(key, lang);
    const scope = cmdName ? commandFlagScopes[cmdName]?.[key] : undefined;
    return { label: item, description, scope };
  });

export const getCommandNotes = (cmdName: string, lang: Language): string[] => {
  const notes = commandNotes[cmdName];
  if (!notes) return [];
  return notes.map((n) => n[lang === 'vi' ? 1 : 0]);
};
