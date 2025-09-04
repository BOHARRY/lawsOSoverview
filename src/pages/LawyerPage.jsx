import React from 'react'

function LawyerPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">律師戰歷</h1>
        <p className="page-subtitle">戰歷統計 + 勝訴率 + AI 優劣勢</p>
      </header>
      
      <section className="content-section">
        <h2 className="section-title">功能摘要</h2>
        <ul className="feature-list">
          <li>勝訴率、常見案類與法院、代表性案件一頁呈現</li>
          <li>AI 優劣勢分析，點擊展開與動畫呈現</li>
          <li>Chart.js 圖表即時渲染</li>
        </ul>
      </section>
      
      <section className="content-section">
        <h2 className="section-title">關鍵畫面</h2>
        <div className="screens-grid">
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">律師戰歷儀表板</div>
            <div className="caption">勝訴率、常見案類、代表性案件集中呈現</div>
          </div>
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">AI 優劣勢分析</div>
            <div className="caption">點擊展開重點，協助快速理解律師特性</div>
          </div>
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">圖表視覺化</div>
            <div className="caption">雷達、長條與圓餅圖，清晰呈現分佈</div>
          </div>
        </div>
      </section>
      
      <section className="content-section">
        <h2 className="section-title">流程</h2>
        <div className="flow">
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:search.svg" />搜尋律師</div>
          <div className="arrow">→</div>
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:database.svg" />彙整戰歷</div>
          <div className="arrow">→</div>
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:insights.svg" />AI 優劣勢</div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">價值主張</h2>
        <div className="value-grid">
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:auto-awesome-motion.svg" />
            <div>
              <div className="kpi">戰歷彙整自動化</div>
              <div className="desc">系統自動聚合資料，省去手動蒐集</div>
            </div>
          </div>
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:checklist.svg" />
            <div>
              <div className="kpi">重點一目了然</div>
              <div className="desc">勝率/常見案類/代表案例快速掌握</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LawyerPage
