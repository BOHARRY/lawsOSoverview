import React from 'react'

function LawyerPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">
        <img
            src="https://api.iconify.design/iconoir:people-tag.svg"
            alt="search"
            style={{width:'38px', height:'38px', verticalAlign:'-6px', marginRight:'10px'}}
          />法務情資雷達站
        </h1>
        <p className="page-subtitle">知己知彼，獲得對造律師、審理法官的傾向情報。</p>
      </header>
      
      {/* 律師戰歷示意圖 */}
      <section className="content-section">
        <div className="image-viewer-container">
          <div className="viewer-wrapper">
            <img
              src="/lawsOSoverview/lawyer_pic.jpg"
              alt="律師戰歷分析界面"
              className="lawyer-sample-image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
                objectPosition: '0 0',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* 律師情蒐系統 */}
      <section className="content-section">
        <h2 className="section-title">律師戰歷情蒐系統</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:radar.svg" alt="win-rate-radar" />
            <div className="feature-content">
              <div className="feature-title">對造律師勝訴率雷達</div>
              <div className="feature-description">快速鎖定對方律師近三年的案件紀錄與勝訴率，清楚掌握對手的專長與弱項，為訴訟策略制定提供數據支撐。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/solar:people-nearby-broken.svg" alt="case-filtering" />
            <div className="feature-content">
              <div className="feature-title">對手案件全覽與精準篩選</div>
              <div className="feature-description">可依案件類型、結果、日期快速篩選案件列表，一鍵掌握對手過往案例，節省蒐集資料時間，讓策略準備更高效。</div>
            </div>
          </div>
        </div>
      </section>

      {/* 法官傾向分析示意圖 */}
      <section className="content-section">
        <div className="image-viewer-container">
          <div className="viewer-wrapper">
            <img
              src="/lawsOSoverview/judge_pic.png"
              alt="法官傾向分析界面"
              className="judge-sample-image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '0 0',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* 法官分析核心功能 */}
      <section className="content-section">
        <h2 className="section-title">法官傾向情蒐系統</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:radar.svg" alt="judge-tendency" />
            <div className="feature-content">
              <div className="feature-title">法官裁判傾向全景圖</div>
              <div className="feature-description">以雷達圖和比例分析呈現法官對不同案件類型的支持度、認定標準和裁判特性，讓律師快速掌握該法官的整體判案風格。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:analytics-outline.svg" alt="data-insights" />
            <div className="feature-content">
              <div className="feature-title">案件數據精準洞察</div>
              <div className="feature-description">整合近三年案件數據，顯示勝訴率、平均求償金額與核准比例，讓律師評估訴訟策略時更有數據依據。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:psychology-outline.svg" alt="ai-reasoning" />
            <div className="feature-content">
              <div className="feature-title">AI 推理與趨勢解讀</div>
              <div className="feature-description">透過 AI 模型歸納法官在事實認定、程序敏感度、證據標準等面向的傾向評分，幫助律師預判法官的審理重點。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:bookmark-manager-outline.svg" alt="case-examples" />
            <div className="feature-content">
              <div className="feature-title">代表性案例快速定位</div>
              <div className="feature-description">自動篩選法官代表性判決，提供關鍵案例與量化標籤，讓律師可一鍵比對過往裁判邏輯，加快備戰速度。</div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default LawyerPage
