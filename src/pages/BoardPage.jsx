import React from 'react'

function BoardPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">
          <img 
            src="https://api.iconify.design/material-symbols:dashboard-outline.svg" 
            alt="dashboard" 
            style={{width:'38px', height:'38px', verticalAlign:'-6px', marginRight:'10px'}}
          />
          知識圖板
        </h1>
        <p className="page-subtitle">視覺化案件管理 + 智慧連結 + 協作工作流</p>
      </header>

      {/* 功能摘要 */}
      <section className="content-section">
        <h2 className="section-title">功能摘要</h2>
        <ul className="feature-list">
          <li>拖拽式節點編輯器，支援案件、律師、法官、判決等多種節點類型</li>
          <li>智慧連結建議，自動發現相關案例和人物關係</li>
          <li>即時協作與版本控制，團隊共享知識圖譜</li>
          <li>AI 輔助分析，自動生成案件洞察和策略建議</li>
        </ul>
      </section>

      {/* 關鍵畫面 */}
      <section className="content-section">
        <h2 className="section-title">關鍵畫面</h2>
        <div className="screens-grid">
          <div className="screenshot-card">
            <div className="window-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="shot">節點編輯器</div>
            <div className="caption">拖拽創建案件、人物、判決節點，建立知識網絡</div>
          </div>
          <div className="screenshot-card">
            <div className="window-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="shot">智慧連結</div>
            <div className="caption">AI 自動建議相關連結，發現隱藏關係</div>
          </div>
          <div className="screenshot-card">
            <div className="window-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="shot">協作工作流</div>
            <div className="caption">團隊即時協作，版本控制與權限管理</div>
          </div>
        </div>
      </section>

      {/* 流程 */}
      <section className="content-section">
        <h2 className="section-title">流程</h2>
        <div className="flow">
          <div className="step">
            <img className="icon-24" src="https://api.iconify.design/material-symbols:add-circle-outline.svg" />
            創建節點
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <img className="icon-24" src="https://api.iconify.design/material-symbols:link.svg" />
            建立連結
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <img className="icon-24" src="https://api.iconify.design/material-symbols:insights.svg" />
            AI 分析
          </div>
        </div>
      </section>

      {/* 價值主張 */}
      <section className="content-section">
        <h2 className="section-title">價值主張</h2>
        <div className="value-grid">
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:speed.svg" />
            <div>
              <div className="kpi">提升效率 70%</div>
              <div className="desc">視覺化管理，快速掌握案件全貌</div>
            </div>
          </div>
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:link.svg" />
            <div>
              <div className="kpi">發現關聯 +300%</div>
              <div className="desc">AI 智慧連結，挖掘隱藏關係</div>
            </div>
          </div>
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:group.svg" />
            <div>
              <div className="kpi">協作效率 +85%</div>
              <div className="desc">團隊共享知識，避免重複工作</div>
            </div>
          </div>
        </div>
      </section>

      {/* 詳細功能 */}
      <section className="content-section">
        <h2 className="section-title">詳細功能</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:drag-pan-outline.svg" alt="drag" />
            <div className="feature-content">
              <div className="feature-title">拖拽編輯</div>
              <div className="feature-description">直觀的拖拽介面，輕鬆創建和編輯節點關係。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:auto-awesome-outline.svg" alt="ai" />
            <div className="feature-content">
              <div className="feature-title">AI 建議</div>
              <div className="feature-description">智慧分析現有節點，自動建議相關連結。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:sync-outline.svg" alt="sync" />
            <div className="feature-content">
              <div className="feature-title">即時同步</div>
              <div className="feature-description">多人協作即時同步，版本控制與衝突解決。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:analytics-outline.svg" alt="analytics" />
            <div className="feature-content">
              <div className="feature-title">深度分析</div>
              <div className="feature-description">圖譜分析工具，發現關鍵路徑和影響因子。</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BoardPage
