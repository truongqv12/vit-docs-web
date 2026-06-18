export const SITE_CONFIG = {
  // Tên thương hiệu đổi sang Vit — không dùng VividKit/ClaudeKit nữa
  name: 'Vit',
  tagline: 'Vit Engine — AI coding siêu tốc',
  description: 'Hướng dẫn toàn diện cho Vit Engine: cài đặt, skills, workflows và CLI. Giúp lập trình viên tận dụng tối đa Vit với Claude Code.',
  claudekitReferralUrl: import.meta.env.PUBLIC_CLAUDEKIT_REFERRAL_URL || '',
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY || '',
  email: 'thieunguyen.tech@gmail.com',
  twitter: '@vit_engine',
  github: 'vit-engine/vit-docs-web',
  domain: import.meta.env.PUBLIC_SITE_URL || 'http://localhost'
};