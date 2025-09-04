# 🚀 LawsOS 自動化腳本使用指南

## 📋 腳本概覽

| 腳本 | 用途 | 使用場景 |
|------|------|----------|
| `dev.ps1` | 開發環境啟動 | 日常開發 |
| `build-test.ps1` | 構建測試 | 部署前測試 |
| `quick-deploy.ps1` | 快速部署 | 小修改快速上線 |
| `deploy.ps1` | 完整部署 | 正式部署 |

## 🛠️ 日常開發流程

### 1. 開始開發
```powershell
# 啟動開發環境（自動安裝依賴、切換分支、拉取代碼）
.\dev.ps1

# 如果需要重新安裝依賴
.\dev.ps1 -Install

# 如果需要清理並重新安裝
.\dev.ps1 -Clean
```

### 2. 開發過程
- 編輯 `src/` 目錄下的文件
- 瀏覽器自動刷新顯示更改
- 開發服務器地址：`http://localhost:5173`

### 3. 測試構建
```powershell
# 測試構建是否正常
.\build-test.ps1
```

### 4. 部署上線

#### 快速部署（推薦日常使用）
```powershell
# 一鍵部署，使用默認提交信息
.\quick-deploy.ps1

# 或指定提交信息
.\quick-deploy.ps1 -Message "修復首頁顯示問題"
```

#### 完整部署（重要更新使用）
```powershell
# 交互式部署，會提示輸入提交信息
.\deploy.ps1

# 直接指定提交信息
.\deploy.ps1 -Message "添加新的統計頁面"

# 跳過構建（如果已經構建過）
.\deploy.ps1 -SkipBuild

# 強制部署（跳過確認）
.\deploy.ps1 -Force
```

## 📝 常用命令示例

### 日常小修改
```powershell
# 1. 啟動開發
.\dev.ps1

# 2. 修改代碼...

# 3. 快速部署
.\quick-deploy.ps1 -Message "修復按鈕樣式"
```

### 添加新功能
```powershell
# 1. 啟動開發
.\dev.ps1

# 2. 開發新功能...

# 3. 測試構建
.\build-test.ps1

# 4. 正式部署
.\deploy.ps1 -Message "添加用戶管理功能"
```

### 緊急修復
```powershell
# 1. 快速修復代碼

# 2. 立即部署
.\quick-deploy.ps1 -Message "緊急修復：修復登錄問題"
```

## 🔧 腳本功能詳解

### `dev.ps1` - 開發環境
- ✅ 自動檢查並安裝依賴
- ✅ 切換到 main 分支
- ✅ 拉取最新代碼
- ✅ 啟動開發服務器
- ✅ 支援清理重裝模式

### `build-test.ps1` - 構建測試
- ✅ 清理舊構建文件
- ✅ 執行構建
- ✅ 檢查構建結果
- ✅ 啟動預覽服務器
- ✅ 構建狀態報告

### `quick-deploy.ps1` - 快速部署
- ✅ 自動生成提交信息
- ✅ 強制執行模式
- ✅ 適合日常小修改
- ✅ 一鍵完成所有步驟

### `deploy.ps1` - 完整部署
- ✅ Git 狀態檢查
- ✅ 交互式提交信息
- ✅ 自動分支管理
- ✅ 構建和部署
- ✅ 錯誤處理和回滾
- ✅ 彩色輸出和進度提示

## ⚠️ 注意事項

### 執行權限
如果遇到執行權限問題，請運行：
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 常見問題

1. **腳本無法執行**
   - 檢查是否在項目根目錄
   - 檢查 PowerShell 執行權限

2. **構建失敗**
   - 運行 `.\dev.ps1 -Clean` 清理重裝
   - 檢查代碼語法錯誤

3. **部署失敗**
   - 檢查網絡連接
   - 確認 Git 配置正確

4. **網站沒有更新**
   - 等待 2-5 分鐘
   - 清除瀏覽器緩存
   - 檢查 gh-pages 分支是否正確推送

## 🎯 最佳實踐

1. **開發前先拉取**：使用 `.\dev.ps1` 自動處理
2. **部署前先測試**：使用 `.\build-test.ps1` 確認構建
3. **小修改用快速部署**：`.\quick-deploy.ps1`
4. **重要更新用完整部署**：`.\deploy.ps1`
5. **定期清理依賴**：`.\dev.ps1 -Clean`

## 🌐 部署結果

- **網站地址**：https://boharry.github.io/lawsOSoverview/
- **更新時間**：2-5 分鐘
- **分支管理**：main（開發）+ gh-pages（部署）
