import React from 'react'

function CaseSearchPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">判決智慧搜索</h1>
        <p className="page-subtitle">運用智慧檢索快速獲得關鍵判決，並進行更高效的整合管理。</p>
      </header>

      {/* 功能展示區塊 - Grid 布局 */}
      <section className="content-section">
        <div className="features-grid-container">
          {/* 第1個區塊：智慧檢索提示（圖片） */}
          <div className="feature-block image-block">
            <img src="https://via.placeholder.com/400x300/56b77a/ffffff?text=智慧檢索提示" alt="智慧檢索提示界面" />
          </div>

          {/* 第2個區塊：智慧檢索提示（文字） */}
          <div className="feature-block text-block">
            <h3>智慧檢索提示</h3>
            <p>顯示判決摘要、關鍵字匹配段落、判決理由、關鍵標籤等資訊，快速鎖定查找判決書。</p>
          </div>

          {/* 第3個區塊：判決爭點提示（文字） */}
          <div className="feature-block text-block">
            <h3>判決爭點提示</h3>
            <p>顯示該判決書爭點，點選後可跳轉到該爭點段落，快速鎖定判決書關鍵內容。</p>
          </div>

          {/* 第4個區塊：判決爭點提示（圖片） */}
          <div className="feature-block image-block">
            <img src="https://via.placeholder.com/400x300/4ade80/ffffff?text=判決爭點提示" alt="判決爭點提示界面" />
          </div>

          {/* 第5個區塊：自動歸檔分頁（圖片） */}
          <div className="feature-block image-block">
            <img src="https://via.placeholder.com/400x300/22c55e/ffffff?text=自動歸檔分頁" alt="自動歸檔分頁界面" />
          </div>

          {/* 第6個區塊：自動歸檔分頁（文字） */}
          <div className="feature-block text-block">
            <h3>自動歸檔分頁</h3>
            <p>開啟的判決自動生成分頁，隨時可重新開啟或拖曳至圖版進一步分析，另外還可以為分頁作標記。</p>
          </div>

          {/* 第7個區塊：工作區案件整理（文字） */}
          <div className="feature-block text-block">
            <h3>工作區案件整理</h3>
            <p>每一次搜索關鍵字都會自動佈署新的工作區，工作區可獨立歸檔判決書分頁，可以為工作區重新命名進行標記。</p>
          </div>

          {/* 第8個區塊：工作區案件整理（圖片） */}
          <div className="feature-block image-block">
            <img src="https://via.placeholder.com/400x300/16a34a/ffffff?text=工作區案件整理" alt="工作區案件整理界面" />
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
