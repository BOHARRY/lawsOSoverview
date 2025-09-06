import React from 'react'
import './CaseSearchFeatures.css'

function CaseSearchPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">判決智慧搜索</h1>
        <p className="page-subtitle">運用智慧檢索快速獲得關鍵判決，並進行更高效的整合管理。</p>
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

      <div className="kpi-strip-title">
        價值主張
      </div>

      {/* KPI strip above the three core cards */}
      <section className="content-section2" aria-label="價值主張">
        <div className="kpi-strip">
          <div className="kpi-item" style={{padding:'18px 8px'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>案件理解速度</div>
            <div
              className="kpi-value"
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px', color:'var(--kpi-text)'}}
            >
              +200%
            </div>
          </div>
          <div className="kpi-item" style={{padding:'18px 8px', borderLeft:'1px solid var(--border)'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>資訊整理效率</div>
            <div
              className="kpi-value"
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px', color:'var(--kpi-text)'}}
            >
              +150%
            </div>
          </div>
          <div className="kpi-item" style={{padding:'18px 8px', borderLeft:'1px solid var(--border)'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>發現隱藏機會</div>
            <div
              className="kpi-value"
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px', color:'var(--kpi-text)'}}
            >
              +300%
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseSearchPage
