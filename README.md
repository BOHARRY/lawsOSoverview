# 🏛️ LawsOS 一站式智慧案件整合平台

> 現代化的法律系統概覽平台，採用 React 技術構建的單頁應用

## 🌐 線上預覽

**網站地址**: [https://boharry.github.io/lawsOSoverview/](https://boharry.github.io/lawsOSoverview/)

## ✨ 功能特色

### 🎯 核心功能
- **📊 智慧儀表板** - 即時顯示系統 KPI 和統計數據
- **⚖️ 法官管理** - 法官資訊和案件分配管理
- **👨‍💼 律師服務** - 律師資料庫和服務管理
- **🔍 案件搜尋** - 強大的案件檢索和篩選功能
- **🤖 AI 書狀** - 智慧化法律文件生成
- **📋 公告板** - 重要通知和公告發布

### 🚀 技術特色
- **⚡ 無縫切換** - 真正的單頁應用體驗
- **📱 響應式設計** - 完美支援桌面和移動端
- **🎨 動畫效果** - 流暢的數字動畫和過渡效果
- **🔄 熱重載** - 開發時即時預覽更改
- **🛡️ 錯誤處理** - 完善的錯誤處理機制

## 🛠️ 技術棧

### 前端技術
- **React 18** - 現代化的前端框架
- **React Router DOM** - 客戶端路由管理
- **Vite** - 快速的構建工具
- **CSS3** - 現代化樣式設計
- **Font Awesome** - 圖標庫

### 開發工具
- **PowerShell 腳本** - 自動化開發和部署
- **Git** - 版本控制
- **GitHub Pages** - 免費靜態網站託管

### 部署架構
- **main 分支** - 開發分支，包含源代碼
- **gh-pages 分支** - 部署分支，包含構建後的靜態文件

## 🚀 快速開始

### 📋 環境要求
- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **Git** >= 2.0.0
- **PowerShell** 5.0+ (Windows)

### ⚡ 一鍵啟動
```powershell
# 1. 克隆項目
git clone https://github.com/BOHARRY/lawsOSoverview.git
cd lawsOSoverview

# 2. 設置執行權限
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 3. 啟動開發環境
.\dev.ps1
```
定期清理依賴：如果再次遇到問題，運行 npm run dev 前先清理：
rm -rf node_modules package-lock.json
npm install
### 🔧 手動安裝
```bash
# 1. 安裝依賴
npm install

# 2. 啟動開發服務器
npm run dev

# 3. 在瀏覽器中打開
# http://localhost:5173
```

## 📖 使用指南

### 🛠️ 開發流程
```powershell
# 開始開發
.\dev.ps1

# 測試構建
.\build-test.ps1

# 快速部署
.\quick-deploy.ps1

# 完整部署
.\deploy.ps1
```

### 📱 本地測試
```powershell
# 開發模式測試
.\dev.ps1
# 訪問 http://localhost:5173

# 生產模式測試
.\build-test.ps1
# 訪問 http://localhost:4173
```

### 🚀 部署到 GitHub Pages
```powershell
# 🛡️ 安全部署（強烈推薦）
.\deploy-safe.ps1 -Message "更新內容描述"

# 🚀 快速部署（日常使用）
.\quick-deploy.ps1 -Message "更新內容描述"

# 🔧 完整部署（備用選項）
.\deploy.ps1 -Message "重要功能更新"
```

**部署腳本特色**：
- ✅ **防止 node_modules 污染** - 絕不會將依賴文件部署到網站
- ✅ **自動文件檢查** - 智能檢測異常文件數量並停止部署
- ✅ **完整錯誤處理** - 出錯時自動回滾和清理
- ✅ **部署統計顯示** - 清楚顯示部署的文件和大小

## 📁 項目結構
```
lawsOSoverview/
├── src/                    # 源代碼
│   ├── components/         # React 組件
│   │   └── Sidebar.jsx     # 側邊欄組件
│   ├── pages/              # 頁面組件
│   │   ├── HomePage.jsx    # 首頁
│   │   ├── JudgePage.jsx   # 法官頁面
│   │   ├── LawyerPage.jsx  # 律師頁面
│   │   ├── CaseSearchPage.jsx  # 案件搜尋
│   │   ├── AIPleadingPage.jsx  # AI 書狀
│   │   └── BoardPage.jsx   # 公告板
│   ├── App.jsx             # 主應用組件
│   ├── main.jsx            # 應用入口
│   └── styles.css          # 全局樣式
├── sample/                 # 原始 HTML 文件（備份）
├── deploy-safe.ps1         # 🛡️ 安全部署腳本（推薦）
├── deploy.ps1              # 完整部署腳本
├── quick-deploy.ps1        # 快速部署腳本
├── dev.ps1                 # 開發環境腳本
├── build-test.ps1          # 構建測試腳本
├── validate-deploy.ps1     # 部署環境驗證腳本
├── README-SCRIPTS.md       # 腳本使用說明
├── DEPLOY-FIXES.md         # 部署問題修復說明
├── package.json            # 項目配置
├── vite.config.js          # Vite 配置
└── index.html              # HTML 模板
```

## 📚 詳細文檔

- **[腳本使用指南](README-SCRIPTS.md)** - 詳細的開發和部署流程說明
- **[部署問題修復](DEPLOY-FIXES.md)** - 部署腳本修復和改進說明
- **[線上網站](https://boharry.github.io/lawsOSoverview/)** - 實際運行的應用

## 🔧 故障排除

### 常見問題
```powershell
# 腳本執行權限問題
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 依賴安裝問題
.\dev.ps1 -Clean

# 部署問題（使用安全部署腳本）
.\deploy-safe.ps1 -Force

# 驗證部署環境
.\validate-deploy.ps1

# 網站沒有更新
# 等待 2-5 分鐘，清除瀏覽器緩存
```

詳細的故障排除指南請參考：
- [README-SCRIPTS.md](README-SCRIPTS.md#故障排除) - 一般問題
- [DEPLOY-FIXES.md](DEPLOY-FIXES.md) - 部署問題專門說明

## 🎯 最佳實踐

1. **開發前先拉取**: 使用 `.\dev.ps1` 自動處理
2. **部署前先測試**: 使用 `.\build-test.ps1` 確認構建
3. **優先使用安全部署**: `.\deploy-safe.ps1` （強烈推薦）
4. **小修改用快速部署**: `.\quick-deploy.ps1`
5. **驗證部署環境**: 遇到問題時使用 `.\validate-deploy.ps1`
6. **查看修復說明**: 部署問題請參考 `DEPLOY-FIXES.md`

## 📄 許可證

本項目採用 MIT 許可證

## 👥 作者

- **BOHARRY** - *項目開發* - [GitHub](https://github.com/BOHARRY)

---

⭐ 如果這個項目對您有幫助，請給它一個星星！
