# ZBSwork

> 本仓库是 [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)（MIT License）的内部品牌化发行版，产品名 **ZBSwork**。
> 仅限内部使用，与 DeepSeek 官方无关联；原始 LICENSE 与版权声明完整保留。

## 品牌改动范围

| 层 | 改动 |
|---|---|
| 图标 | `apps/desktop/resources/`（icon-windows.png / icon-macos.png / icon.svg / tray-windows.ico）、`apps/web/public/favicon*.svg` |
| 安装包 | productName `ZBSwork`，产物名 `zbswork-<version>-win-x64.exe`（electron-builder-config.mjs） |
| 安装器 | NSIS 文案（installer/strings.nsh） |
| 壳层 | 窗口标题/托盘/欢迎页（apps/desktop/src/locale.ts） |
| UI 组件 | FishLogo → 山形徽标、BrandWordmark → ZBSwork 文字标（packages/client/ui-primitives/src/） |
| UI 文案 | packages/client/*/locales.ts（中文/英文品牌句） |
| 欢迎页 | renderer/assets/welcome-brand.svg、slogan |

保留不动：模型 ID、`dsh://` 协议、API 域名、LICENSE 版权声明（MIT 合规）。

## 构建说明

- GitHub Actions：`.github/workflows/zbswork-build.yml`（push 到 main 或手动触发）
- 产物：unsigned NSIS 安装包（Actions Artifact：`zbswork-win-x64`）
- 本地构建：`cd apps/desktop && copy .env.windows.example .env.windows && pnpm run package:win:x64:unsigned`

## 自动更新

本发行版关闭了官方 nightly 更新通道（publish: null），更新节奏由本仓库控制：上游发新版后合并本品牌补丁并重新构建。
