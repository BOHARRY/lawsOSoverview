import React from 'react'

function CaseSearchPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">判決查找</h1>
        <p className="page-subtitle">AI 高亮 + 智能篩選 + 結構化摘要</p>
      </header>
      
      <section className="content-section">
        <h2 className="section-title">功能摘要</h2>
        <ul className="feature-list">
          <li>關鍵詞 + 多維度篩選（案類、法院、金額、理由、結構、難度）</li>
          <li>AI 高亮法條與引用，點擊可彈出法條浮窗</li>
          <li>結果摘要、結構強度、複雜度等量化指標</li>
        </ul>
      </section>
      
      <section className="content-section">
        <h2 className="section-title">關鍵畫面</h2>
        <div className="screens-grid">
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">搜尋結果列表（高亮法條與引用）</div>
            <div className="caption">一眼看到法條高亮、引用與摘要，支持條件切換</div>
          </div>
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">法條浮窗</div>
            <div className="caption">指向法條標註時，快速預覽引用內容與說明</div>
          </div>
          <div className="screenshot-card">
            <div className="window-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="shot">篩選條件</div>
            <div className="caption">案類、法院等條件即時篩選，支援防抖與分頁</div>
          </div>
        </div>
      </section>
      
      <section className="content-section">
        <h2 className="section-title">流程</h2>
        <div className="flow">
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:search.svg" />輸入關鍵詞/條件</div>
          <div className="arrow">→</div>
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:sync-alt.svg" />後端檢索 + AI 高亮</div>
          <div className="arrow">→</div>
          <div className="step"><img className="icon-24" src="https://api.iconify.design/material-symbols:insights.svg" />摘要與量化評分</div>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">價值主張</h2>
        <div className="value-grid">
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:speed.svg" />
            <div>
              <div className="kpi">縮短檢索時間 80%</div>
              <div className="desc">AI 高亮與即時篩選，迅速收斂結果</div>
            </div>
          </div>
          <div className="value-card">
            <img className="icon-20" src="https://api.iconify.design/material-symbols:target.svg" />
            <div>
              <div className="kpi">提高命中率 30%</div>
              <div className="desc">結構化摘要與引用強化，精準找到關鍵</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseSearchPage
