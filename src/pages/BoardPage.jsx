import React, { useState } from 'react'

function BoardPage() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">
          <img
            src="https://api.iconify.design/material-symbols:view-kanban-outline.svg"
            alt="board"
            style={{width:'38px', height:'38px', verticalAlign:'-6px', marginRight:'10px'}}
          />
          知識圖板
        </h1>
        <p className="page-subtitle">開放式白板 × 卡片式案件脈絡整理 × AI 智慧分析</p>
      </header>

      {/* 功能摘要 */}
      <section className="content-section">
        <h2 className="section-title">功能摘要</h2>
        <div className="summary-card">
          <div className="summary-content">
            <p className="summary-text">
              提供<strong>開放式的白板</strong>，運用<strong>卡片式的方式</strong>整理案件脈絡和資訊，
              透過<strong>AI圖板的功能</strong>，獲得稀有援引資料、潛在有利見解、關鍵致勝因子以及攻防切角。
            </p>
          </div>
          <div className="summary-features">
            <div className="feature-tag">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:dashboard-outline.svg" />
              開放式白板
            </div>
            <div className="feature-tag">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:view-agenda-outline.svg" />
              卡片式整理
            </div>
            <div className="feature-tag">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:auto-awesome.svg" />
              AI 智慧分析
            </div>
            <div className="feature-tag">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:insights.svg" />
              攻防策略
            </div>
          </div>
        </div>
      </section>

      {/* 圖板卡片介紹 */}
      <section className="content-section">
        <h2 className="section-title">圖板卡片介紹</h2>
        <div className="board-cards-grid">
          <div
            className={`board-card ${activeCard === 'case' ? 'active' : ''}`}
            onClick={() => setActiveCard(activeCard === 'case' ? null : 'case')}
          >
            <div className="card-header">
              <img className="card-icon" src="https://api.iconify.design/material-symbols:folder-open-outline.svg" />
              <h3>案件卡片</h3>
              <span className="card-badge">核心</span>
            </div>
            <div className="card-content">
              <p>整理案件基本資訊、時間軸、關鍵事實</p>
              {activeCard === 'case' && (
                <div className="card-details">
                  <div className="detail-item">📋 案件編號、當事人資訊</div>
                  <div className="detail-item">📅 重要時間節點記錄</div>
                  <div className="detail-item">🔍 關鍵事實與爭點整理</div>
                  <div className="detail-item">📎 相關文件附件管理</div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`board-card ${activeCard === 'law' ? 'active' : ''}`}
            onClick={() => setActiveCard(activeCard === 'law' ? null : 'law')}
          >
            <div className="card-header">
              <img className="card-icon" src="https://api.iconify.design/material-symbols:gavel.svg" />
              <h3>法條卡片</h3>
              <span className="card-badge">依據</span>
            </div>
            <div className="card-content">
              <p>收集相關法條、判例、學說見解</p>
              {activeCard === 'law' && (
                <div className="card-details">
                  <div className="detail-item">⚖️ 適用法條條文內容</div>
                  <div className="detail-item">📚 相關判例與裁判要旨</div>
                  <div className="detail-item">🎓 學者專家見解引用</div>
                  <div className="detail-item">🔗 法條間關聯性分析</div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`board-card ${activeCard === 'evidence' ? 'active' : ''}`}
            onClick={() => setActiveCard(activeCard === 'evidence' ? null : 'evidence')}
          >
            <div className="card-header">
              <img className="card-icon" src="https://api.iconify.design/material-symbols:fact-check-outline.svg" />
              <h3>證據卡片</h3>
              <span className="card-badge">關鍵</span>
            </div>
            <div className="card-content">
              <p>管理證據資料、證明力分析</p>
              {activeCard === 'evidence' && (
                <div className="card-details">
                  <div className="detail-item">📄 書證、物證分類管理</div>
                  <div className="detail-item">👥 證人證言記錄整理</div>
                  <div className="detail-item">🔬 鑑定報告與專業意見</div>
                  <div className="detail-item">⚡ 證據力強弱評估</div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`board-card ${activeCard === 'strategy' ? 'active' : ''}`}
            onClick={() => setActiveCard(activeCard === 'strategy' ? null : 'strategy')}
          >
            <div className="card-header">
              <img className="card-icon" src="https://api.iconify.design/material-symbols:strategy-outline.svg" />
              <h3>策略卡片</h3>
              <span className="card-badge">AI</span>
            </div>
            <div className="card-content">
              <p>AI 分析攻防策略、致勝關鍵</p>
              {activeCard === 'strategy' && (
                <div className="card-details">
                  <div className="detail-item">🎯 攻防切角建議</div>
                  <div className="detail-item">💡 潛在有利見解</div>
                  <div className="detail-item">🔑 關鍵致勝因子</div>
                  <div className="detail-item">📊 勝訴機率評估</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AI 圖板功能 */}
      <section className="content-section">
        <h2 className="section-title">AI 圖板功能</h2>
        <div className="ai-features-grid">
          <div className="ai-feature-card">
            <div className="ai-icon-wrapper">
              <img className="ai-icon" src="https://api.iconify.design/material-symbols:library-books-outline.svg" />
            </div>
            <h3>稀有援引資料</h3>
            <p>AI 深度挖掘罕見判例、特殊見解，發現對案件有利的稀有法律資源</p>
            <div className="ai-examples">
              <span className="example-tag">罕見判例</span>
              <span className="example-tag">特殊見解</span>
              <span className="example-tag">國外案例</span>
            </div>
          </div>

          <div className="ai-feature-card">
            <div className="ai-icon-wrapper">
              <img className="ai-icon" src="https://api.iconify.design/material-symbols:lightbulb-outline.svg" />
            </div>
            <h3>潛在有利見解</h3>
            <p>智慧分析案件脈絡，識別可能被忽略的有利論點和法律觀點</p>
            <div className="ai-examples">
              <span className="example-tag">隱藏論點</span>
              <span className="example-tag">新興觀點</span>
              <span className="example-tag">反向思考</span>
            </div>
          </div>

          <div className="ai-feature-card">
            <div className="ai-icon-wrapper">
              <img className="ai-icon" src="https://api.iconify.design/material-symbols:key-outline.svg" />
            </div>
            <h3>關鍵致勝因子</h3>
            <p>基於大數據分析，識別影響案件結果的關鍵要素和決定性因素</p>
            <div className="ai-examples">
              <span className="example-tag">核心爭點</span>
              <span className="example-tag">關鍵證據</span>
              <span className="example-tag">程序要點</span>
            </div>
          </div>

          <div className="ai-feature-card">
            <div className="ai-icon-wrapper">
              <img className="ai-icon" src="https://api.iconify.design/material-symbols:swords.svg" />
            </div>
            <h3>攻防切角</h3>
            <p>提供多角度攻防策略建議，包含主張論述、反駁要點、風險評估</p>
            <div className="ai-examples">
              <span className="example-tag">攻擊策略</span>
              <span className="example-tag">防禦要點</span>
              <span className="example-tag">風險控制</span>
            </div>
          </div>
        </div>
      </section>

      {/* 價值主張 */}
      <section className="content-section">
        <h2 className="section-title">價值主張</h2>
        <div className="value-proposition-grid">
          <div className="value-prop-card primary">
            <div className="value-icon">
              <img src="https://api.iconify.design/material-symbols:dashboard-outline.svg" />
            </div>
            <h3>視覺化案件管理</h3>
            <p>開放式白板設計，將複雜案件脈絡轉化為直觀的視覺化圖表，一目了然掌握全局</p>
            <div className="value-metrics">
              <span className="metric">案件理解速度 <strong>+200%</strong></span>
            </div>
          </div>

          <div className="value-prop-card secondary">
            <div className="value-icon">
              <img src="https://api.iconify.design/material-symbols:view-agenda-outline.svg" />
            </div>
            <h3>卡片式知識整理</h3>
            <p>模組化卡片系統，靈活組織案件資訊，支援拖拽編輯，讓知識管理更加高效</p>
            <div className="value-metrics">
              <span className="metric">資訊整理效率 <strong>+150%</strong></span>
            </div>
          </div>

          <div className="value-prop-card accent">
            <div className="value-icon">
              <img src="https://api.iconify.design/material-symbols:auto-awesome.svg" />
            </div>
            <h3>AI 智慧洞察</h3>
            <p>深度 AI 分析提供稀有資料、有利見解、致勝因子，發現人工難以察覺的關鍵資訊</p>
            <div className="value-metrics">
              <span className="metric">發現隱藏機會 <strong>+300%</strong></span>
            </div>
          </div>

          <div className="value-prop-card highlight">
            <div className="value-icon">
              <img src="https://api.iconify.design/material-symbols:strategy-outline.svg" />
            </div>
            <h3>攻防策略優化</h3>
            <p>多角度攻防切角分析，提供精準的策略建議，大幅提升案件勝訴機率</p>
            <div className="value-metrics">
              <span className="metric">策略精準度 <strong>+180%</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* 圖板示意 */}
      <section className="content-section">
        <h2 className="section-title">圖板示意</h2>
        <div className="board-demo">
          <div className="demo-board">
            <div className="demo-header">
              <div className="demo-title">案件：智慧財產權侵權糾紛</div>
              <div className="demo-tools">
                <span className="tool-btn">🔍</span>
                <span className="tool-btn">➕</span>
                <span className="tool-btn">🔗</span>
                <span className="tool-btn">🤖</span>
              </div>
            </div>
            <div className="demo-canvas">
              <div className="demo-card case-card" style={{top: '20px', left: '50px'}}>
                <div className="card-type">案件</div>
                <div className="card-title">專利侵權案</div>
              </div>
              <div className="demo-card law-card" style={{top: '20px', left: '200px'}}>
                <div className="card-type">法條</div>
                <div className="card-title">專利法第96條</div>
              </div>
              <div className="demo-card evidence-card" style={{top: '120px', left: '50px'}}>
                <div className="card-type">證據</div>
                <div className="card-title">技術比對報告</div>
              </div>
              <div className="demo-card strategy-card" style={{top: '120px', left: '200px'}}>
                <div className="card-type">AI策略</div>
                <div className="card-title">攻防切角分析</div>
              </div>
              <div className="demo-connection" style={{top: '45px', left: '150px', width: '50px'}}></div>
              <div className="demo-connection vertical" style={{top: '70px', left: '75px', height: '50px'}}></div>
              <div className="demo-connection" style={{top: '145px', left: '150px', width: '50px'}}></div>
            </div>
          </div>
          <div className="demo-features">
            <div className="demo-feature">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:drag-pan.svg" />
              拖拽式編輯
            </div>
            <div className="demo-feature">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:auto-awesome.svg" />
              AI 智慧連結
            </div>
            <div className="demo-feature">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:group-work.svg" />
              即時協作
            </div>
          </div>
        </div>
      </section>

      {/* 使用流程 */}
      <section className="content-section">
        <h2 className="section-title">使用流程</h2>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>創建白板</h3>
              <p>建立新的案件圖板，設定基本資訊</p>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>添加卡片</h3>
              <p>拖拽添加案件、法條、證據等卡片</p>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>建立連結</h3>
              <p>連接相關卡片，建立邏輯關係</p>
            </div>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>AI 分析</h3>
              <p>啟動 AI 分析，獲得智慧洞察</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BoardPage
