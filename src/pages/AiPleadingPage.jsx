import React from 'react'

function AiPleadingPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">訴狀生成</h1>
        <p className="page-subtitle">上傳 DOC/DOCX/TXT，即時驗證格式與法官姓名，追蹤分析進度</p>
      </header>
      
      <section className="content-section">
        <h2 className="section-title">流程亮點</h2>
        <ul className="feature-list">
          <li>拖拽上傳、即時驗證、可視化進度</li>
          <li>法官偏好分析與相似案例推薦</li>
          <li>錯誤恢復、生命週期管理與持久化</li>
        </ul>
      </section>
      
      <section className="content-section">
        <h2 className="section-title">架構亮點</h2>
        <ul className="feature-list">
          <li>Enhanced Node：Logic + UI + Module</li>
          <li>Stage 3 服務層：useBaseNode 狀態管理 + 統一持久化</li>
          <li>節點連接檢測：必要/次要連接即時校驗</li>
        </ul>
      </section>
    </>
  )
}

export default AiPleadingPage
