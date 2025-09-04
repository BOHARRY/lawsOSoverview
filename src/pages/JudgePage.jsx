import React from 'react'

function JudgePage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">法官傾向</h1>
        <p className="page-subtitle">裁判傾向 + 代表案例 + 特徵標籤</p>
      </header>
      
      <section className="content-section">
        <h2 className="section-title">功能摘要</h2>
        <ul className="feature-list">
          <li>六維度雷達圖，快速掌握裁判傾向</li>
          <li>案件類型與結果分佈，支援切換視圖</li>
          <li>代表案例清單與特徵標籤</li>
        </ul>
      </section>
      
      <section className="content-section">
        <h2 className="section-title">關鍵畫面</h2>
        <div className="screens-grid">
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">雷達圖</div>
            <div className="caption">六維度裁判傾向，快速掌握偏好</div>
          </div>
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">結果分佈</div>
            <div className="caption">原告/被告/部分勝訴比例一目了然</div>
          </div>
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">代表案例</div>
            <div className="caption">具代表性的裁判與標籤特色</div>
          </div>
        </div>
      </section>
      
      <section className="content-section">
        <h2 className="section-title">流程</h2>
        <div className="flow">
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:search.svg" />選擇法官</div>
          <div className="arrow">→</div>
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:database.svg" />彙整裁判</div>
          <div className="arrow">→</div>
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:insights.svg" />傾向分析</div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">價值主張</h2>
        <div className="value-grid">
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:radar.svg" />
            <div>
              <div className="kpi">傾向分析視覺化</div>
              <div className="desc">降低猜測風險，溝通更有依據</div>
            </div>
          </div>
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:insights.svg" />
            <div>
              <div className="kpi">決策更快更穩</div>
              <div className="desc">代表案例與分佈圖輔助決策</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JudgePage
