# Twitch Project

基於 React + TypeScript + Webpack 構建的現代化 Web 應用程序。

## 技術棧

- **React 19.2** - 前端框架
- **TypeScript 5.9** - 類型安全
- **React Router 7** - 客戶端路由
- **Webpack 5** - 模塊打包工具
- **Babel** - JavaScript 編譯器
- **Jest** - 測試框架
- **Testing Library** - React 組件測試
- **Sass** - CSS 預處理器
- **Docker** - 容器化部署

## 系統需求

- Node.js >= 20.x
- npm >= 10.x
- Docker (可選，用於容器化部署)

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

啟動開發服務器，支持熱重載：

```bash
npm start
```

訪問 http://localhost:3000

### 構建生產版本

```bash
npm run build
```

構建產物會生成在 `dist/` 目錄下。

## 可用腳本

| 命令 | 說明 |
|------|------|
| `npm start` | 啟動開發服務器 (端口 3000) |
| `npm run build` | 構建生產版本 |
| `npm test` | 運行所有測試 |
| `npm run test:watch` | 監聽模式運行測試 |
| `npm run test:coverage` | 運行測試並生成覆蓋率報告 |
| `npm run typecheck` | TypeScript 類型檢查 |

## 測試

項目使用 Jest 和 React Testing Library 進行測試。

### 運行測試

```bash
# 運行所有測試
npm test

# 監聽模式
npm run test:watch

# 生成覆蓋率報告
npm run test:coverage
```

### 測試文件位置

- 組件測試：`src/pages/**/*.test.tsx`
- 集成測試：`src/test/**/*.test.tsx`

## Docker 部署

### 生產環境部署

#### 方式一：使用 Docker 命令

```bash
# 構建鏡像
docker build -t twitch-project:latest .

# 運行容器
docker run -p 8080:80 twitch-project:latest
```

#### 方式二：使用 Docker Compose

```bash
# 啟動生產容器
docker-compose up prod

# 後台運行
docker-compose up -d prod
```

訪問 http://localhost:8080

### 開發環境（Docker）

使用 Docker 進行開發，支持熱重載：

```bash
# 啟動開發容器
docker-compose up dev
```

訪問 http://localhost:3000

### Docker 鏡像信息

- **基礎鏡像**：Node.js 20 Alpine (構建階段)
- **運行鏡像**：Nginx Alpine
- **鏡像大小**：~80MB
- **特性**：多階段構建、gzip 壓縮、靜態資源快取

## 項目結構

```
twitch-project/
├── public/                # 靜態資源
│   └── index.html        # HTML 模板
├── src/
│   ├── pages/            # 頁面組件
│   │   ├── Home/         # 首頁
│   │   │   ├── Home.tsx
│   │   │   └── Home.test.tsx
│   │   └── About/        # 關於頁面
│   │       ├── About.tsx
│   │       └── About.test.tsx
│   ├── test/             # 集成測試
│   │   └── App.test.tsx
│   ├── App.tsx           # 根組件
│   ├── index.tsx         # 應用入口
│   └── setupTests.ts     # 測試配置
├── dist/                 # 構建輸出目錄
├── Dockerfile            # 生產環境 Docker 配置
├── Dockerfile.dev        # 開發環境 Docker 配置
├── docker-compose.yml    # Docker Compose 配置
├── nginx.conf            # Nginx 配置
├── webpack.config.js     # Webpack 配置
├── jest.config.js        # Jest 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 項目依賴
```

## 開發指南

### 新增路由

1. 在 `src/pages/` 創建新的頁面組件
2. 在 `src/App.tsx` 中添加路由配置

```tsx
import NewPage from './pages/NewPage/NewPage';

// 在 Routes 中添加
<Route path="/new-page" element={<NewPage />} />
```

### 編寫測試

所有組件都應包含對應的測試文件：

```tsx
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText(/expected text/i)).toBeInTheDocument();
  });
});
```

### TypeScript 配置

項目使用嚴格模式的 TypeScript 配置：

- 使用新的 JSX 轉換 (`jsx: "react-jsx"`)
- 不需要在每個文件導入 `React`
- 只需要導入使用的類型：`import { ReactElement } from 'react'`

### 樣式

支持以下樣式方案：

- CSS 文件 (`.css`)
- Sass/SCSS 文件 (`.scss`, `.sass`)
- CSS Modules（文件名包含 `.module.`）

## 環境變量

創建 `.env` 文件來配置環境變量（不要提交到 Git）：

```bash
# 示例
REACT_APP_API_URL=https://api.example.com
```

## 瀏覽器支持

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 故障排除

### 常見問題

#### 1. 測試中的 `toBeInTheDocument` 錯誤

確保 `src/setupTests.ts` 已導入 `@testing-library/jest-dom`。

#### 2. Docker 構建失敗

清除 Docker 快取後重試：

```bash
docker builder prune
docker build --no-cache -t twitch-project:latest .
```

#### 3. 熱重載不工作

清除快取並重啟：

```bash
rm -rf node_modules/.cache dist
npm start
```

## 性能優化

### 生產構建優化

- ✅ 代碼分割
- ✅ Tree shaking
- ✅ 壓縮混淆
- ✅ Gzip 壓縮
- ✅ 靜態資源快取

### Docker 優化

- ✅ 多階段構建減小鏡像體積
- ✅ Alpine Linux 基礎鏡像
- ✅ .dockerignore 排除不必要文件
- ✅ npm ci 用於確定性安裝

## 貢獻指南

1. Fork 本項目
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 授權

ISC License

## 聯繫方式

如有問題或建議，請提交 Issue。
