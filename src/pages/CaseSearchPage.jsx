import React from 'react'
import './CaseSearchFeatures.css'

function CaseSearchPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">
          <img
            src="https://api.iconify.design/majesticons:search-text-line.svg"
            alt="search"
            style={{width:'38px', height:'38px', verticalAlign:'-6px', marginRight:'10px'}}
          />
          判決智慧搜索
        </h1>
        <p className="page-subtitle">運用智慧檢索快速獲得關鍵判決，讓律師專注策略，繁瑣檢索交給我們。</p>
      </header>

      {/* 功能展示區塊 - 現代化 Container Query 布局 */}
      <section className="case-features-section">
        {/* 第1組：智慧檢索提示 - 左文字 右圖片 */}
        <div className="case-feature-container">
          <div className="case-feature-wrapper">
            <div className="case-feature-text">
              <h2 className="case-feature-title">智慧檢索提示</h2>
              <p className="case-feature-description">
                顯示判決摘要、關鍵字匹配段落、判決理由、關鍵標籤等資訊，快速鎖定查找判決書。
              </p>
            </div>

            <div className="case-feature-image">
              <div className="case-feature-image-container">
                <img src="https://via.placeholder.com/400x300/56b77a/ffffff?text=智慧檢索提示" alt="智慧檢索提示界面" />
              </div>
            </div>
          </div>
        </div>

        {/* 第2組：判決爭點提示 - 左圖片 右文字 */}
        <div className="case-feature-container">
          <div className="case-feature-wrapper">
            <div className="case-feature-text case-feature-reverse">
              <h2 className="case-feature-title">判決爭點提示</h2>
              <p className="case-feature-description">
                顯示該判決書爭點，點選後可跳轉到該爭點段落，快速鎖定判決書關鍵內容。
              </p>
            </div>

            <div className="case-feature-image case-feature-reverse">
              <div className="case-feature-image-container">
                <img src="https://via.placeholder.com/400x300/4ade80/ffffff?text=判決爭點提示" alt="判決爭點提示界面" />
              </div>
            </div>
          </div>
        </div>

        {/* 第3組：自動歸檔分頁 - 左文字 右圖片 */}
        <div className="case-feature-container">
          <div className="case-feature-wrapper">
            <div className="case-feature-text">
              <h2 className="case-feature-title">自動歸檔分頁</h2>
              <p className="case-feature-description">
                開啟的判決自動生成分頁，隨時可重新開啟或拖曳至圖版進一步分析，另外還可以為分頁作標記。
              </p>
            </div>

            <div className="case-feature-image">
              <div className="case-feature-image-container">
                <img src="https://via.placeholder.com/400x300/22c55e/ffffff?text=自動歸檔分頁" alt="自動歸檔分頁界面" />
              </div>
            </div>
          </div>
        </div>

        {/* 第4組：工作區案件整理 - 左圖片 右文字 */}
        <div className="case-feature-container">
          <div className="case-feature-wrapper">
            <div className="case-feature-text case-feature-reverse">
              <h2 className="case-feature-title">工作區案件整理</h2>
              <p className="case-feature-description">
                每一次搜索關鍵字都會自動佈署新的工作區，工作區可獨立歸檔判決書分頁，可以為工作區重新命名進行標記。
              </p>
            </div>

            <div className="case-feature-image case-feature-reverse">
              <div className="case-feature-image-container">
                <img src="https://via.placeholder.com/400x300/16a34a/ffffff?text=工作區案件整理" alt="工作區案件整理界面" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 智慧搜索核心功能 */}
      <section className="content-section">
        <h2 className="section-title">智慧搜索核心功能</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/iconamoon:lightning-2-fill.svg" alt="smart-search" />
            <div className="feature-content">
              <div className="feature-title">智慧檢索與爭點定位</div>
              <div className="feature-description">透過 AI 驅動的智慧檢索，快速抓取判決核心摘要與關鍵段落，讓律師第一時間聚焦案件重點，節省大量閱讀時間。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:folder-managed-outline.svg" alt="auto-archive" />
            <div className="feature-content">
              <div className="feature-title">自動歸檔與工作區管理</div>
              <div className="feature-description">每次搜尋都自動生成專屬工作區，結果可分頁保存、拖曳至圖板、標記分類，實現高效案件知識管理。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:quick-reference-outline.svg" alt="quick-navigation" />
            <div className="feature-content">
              <div className="feature-title">判決書快速導覽</div>
              <div className="feature-description">內建爭點提示，點擊即可直達相關段落，避免翻頁耗時，讓資料查找像瀏覽網站一樣直覺流暢。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:integration-instructions-outline.svg" alt="data-integration" />
            <div className="feature-content">
              <div className="feature-title">案件資料即時整合</div>
              <div className="feature-description">自動整理並永久保存檢索結果，支援跨案件比對和策略規劃，讓律師能以最少時間獲取最完整的資訊。</div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default CaseSearchPage
