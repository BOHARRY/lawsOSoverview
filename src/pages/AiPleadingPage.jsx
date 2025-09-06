import React from 'react'

function AiPleadingPage() {
  return (
    <>
      <header className="page-header hero">
        <h1 className="page-title">訴狀生成</h1>
        <p className="page-subtitle">運用案件圖板系統，獲得遠超GPT語言模型的精確訴狀草稿。</p>
      </header>

      {/* 智慧訴狀生成介紹 */}
      <section className="content-section">
        <div className="summary-card">
          <div className="summary-content">
            <h2 className="section-title" style={{marginBottom: '20px', color: 'var(--brand-green)'}}>
              ✍️ 智慧訴狀生成：從「AI 玩具」到「專業助手」
            </h2>
            <div className="summary-text" style={{fontSize: '16px', lineHeight: '1.8', color: '#334155'}}>
              <p style={{marginBottom: '16px'}}>
                過去，AI 生成訴狀往往只是生硬套用模板，內容片段化、邏輯鬆散、引用不完整，難以直接採用。
              </p>
              <p style={{marginBottom: '16px'}}>
                我們的知識圖板重新定義了 AI 在法律文件生成的角色——
                透過結合完整裁判書資料庫、知識圖譜式關聯分析與案件細節結構化解析，
                AI 能精準理解當事人、請求項目與法律爭點，並自動串接相關法條與實務見解。
              </p>
              <p style={{marginBottom: '0'}}>
                因此生成的訴狀不僅條理分明、引據充分，更貼近專業律師的寫作邏輯，
                讓使用者從「拿到草稿還要重寫」變成「直接可用的初稿基礎」，
                真正達成 AI 對法律實務的降本增效。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 方法對比區塊 */}
      <section className="content-section">
        <h2 className="section-title">為什麼 LawsOS 的訴狀生成更有效？</h2>

        {/* 整合對比區塊 */}
        <div style={{
          borderRadius: '20px',
          padding: '50px 40px',
          marginTop: '40px',
          background: 'rgba(248, 250, 252, 0.8)',
          border: '1px solid #e2e8f0',
          position: 'relative'
        }}>
          {/* 中間分隔線 */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '40px',
            bottom: '40px',
            width: '1px',
            background: '#e6e6e6ff',
            transform: 'translateX(-50%)'
          }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>

            {/* 左側：傳統方式 */}
            <div>
              {/* 傳統方式標題 */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '30px',
                color: '#dc2626',
                textAlign: 'center'
              }}>
                傳統方式
              </h3>

              {/* 傳統流程 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                marginBottom: '50px'
              }}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#f3f4f6',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px'
                  }}>
                    <img src="https://api.iconify.design/material-symbols:description-outline.svg"
                         style={{width: '28px', height: '28px', color: '#6b7280'}} alt="data" />
                  </div>
                  <span style={{fontSize: '12px', color: '#6b7280'}}>資料</span>
                </div>

                <span style={{fontSize: '20px', color: '#9ca3af'}}>→</span>

                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#f3f4f6',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px'
                  }}>
                    <img src="https://api.iconify.design/hugeicons:chat-gpt.svg"
                         style={{width: '28px', height: '28px', color: '#6b7280'}} alt="chatgpt" />
                  </div>
                  <span style={{fontSize: '12px', color: '#6b7280'}}>ChatGPT</span>
                </div>

                <span style={{fontSize: '20px', color: '#9ca3af'}}>→</span>

                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#f3f4f6',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px'
                  }}>
                    <img src="https://api.iconify.design/material-symbols:book-5.svg"
                         style={{width: '28px', height: '28px', color: '#6b7280'}} alt="pleading" />
                  </div>
                  <span style={{fontSize: '12px', color: '#6b7280'}}>訴狀</span>
                </div>
              </div>

              {/* 傳統方式問題 */}
              <h4 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                color: '#dc2626'
              }}>
                傳統方式的問題：
              </h4>

              <div>
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px'}}>
                  <span style={{color: '#dc2626', fontSize: '16px', marginTop: '2px'}}>✕</span>
                  <span style={{fontSize: '14px', lineHeight: '1.6', color: '#475569'}}>
                    容易出現幻覺，脈絡隨機，根本不知道 ChatGPT 援引什麼、怎麼想的。
                  </span>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px'}}>
                  <span style={{color: '#dc2626', fontSize: '16px', marginTop: '2px'}}>✕</span>
                  <span style={{fontSize: '14px', lineHeight: '1.6', color: '#475569'}}>
                    出問題又要重新「骰一次」，浪費寶貴的時間！
                  </span>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px'}}>
                  <span style={{color: '#dc2626', fontSize: '16px', marginTop: '2px'}}>✕</span>
                  <span style={{fontSize: '14px', lineHeight: '1.6', color: '#475569'}}>
                    生硬套用模板，內容片段化、邏輯鬆散、引用不完整。
                  </span>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                  <span style={{color: '#dc2626', fontSize: '16px', marginTop: '2px'}}>✕</span>
                  <span style={{fontSize: '14px', lineHeight: '1.6', color: '#475569'}}>
                    難以直接採用，拿到草稿還要重寫。
                  </span>
                </div>
              </div>
            </div>

            {/* 右側：LawsOS 方式 */}
            <div>
              {/* LawsOS 方式標題 */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '30px',
                color: 'var(--brand-green)',
                textAlign: 'center'
              }}>
                LawsOS 方式
              </h3>

              {/* LawsOS 流程 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                marginBottom: '50px'
              }}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#dcfce7',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px'
                  }}>
                    <img src="https://api.iconify.design/material-symbols:dashboard-outline.svg"
                         style={{width: '28px', height: '28px', color: 'var(--brand-green)'}} alt="board" />
                  </div>
                  <span style={{fontSize: '12px', color: 'var(--brand-green)', fontWeight: '500'}}>圖板</span>
                </div>

                <span style={{fontSize: '20px', color: 'var(--brand-green)'}}>→</span>

                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#dcfce7',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px'
                  }}>
                    <img src="https://api.iconify.design/material-symbols:owl.svg"
                         style={{width: '28px', height: '28px', color: 'var(--brand-green)'}} alt="lawsos-ai" />
                  </div>
                  <span style={{fontSize: '12px', color: 'var(--brand-green)', fontWeight: '500'}}>LawsOS AI</span>
                </div>

                <span style={{fontSize: '20px', color: 'var(--brand-green)'}}>→</span>

                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: '#dcfce7',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '6px'
                  }}>
                    <img src="https://api.iconify.design/material-symbols:book-5.svg"
                         style={{width: '28px', height: '28px', color: 'var(--brand-green)'}} alt="pleading" />
                  </div>
                  <span style={{fontSize: '12px', color: 'var(--brand-green)', fontWeight: '500'}}>訴狀</span>
                </div>
              </div>

              {/* LawsOS 優勢 */}
              <h4 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                color: 'var(--brand-green)'
              }}>
                LawsOS 的優勢：
              </h4>

              <div>
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px'}}>
                  <span style={{color: 'var(--brand-green)', fontSize: '16px', marginTop: '2px'}}>✓</span>
                  <span style={{fontSize: '14px', lineHeight: '1.6', color: '#475569'}}>
                    完全透過圖板知識拓樸訴狀，結合完整案件脈絡。
                  </span>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px'}}>
                  <span style={{color: 'var(--brand-green)', fontSize: '16px', marginTop: '2px'}}>✓</span>
                  <span style={{fontSize: '14px', lineHeight: '1.6', color: '#475569'}}>
                    讓每一次生成的訴狀都可「溯源」，並隨時可以回去修正。
                  </span>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px'}}>
                  <span style={{color: 'var(--brand-green)', fontSize: '16px', marginTop: '2px'}}>✓</span>
                  <span style={{fontSize: '14px', lineHeight: '1.6', color: '#475569'}}>
                    條理分明、引據充分，更貼近專業律師的寫作邏輯。
                  </span>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
                  <span style={{color: 'var(--brand-green)', fontSize: '16px', marginTop: '2px'}}>✓</span>
                  <span style={{fontSize: '14px', lineHeight: '1.6', color: '#475569'}}>
                    產出真正的訴狀草稿，直接可用的初稿基礎。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 響應式處理 */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
            div[style*="gap: 60px"] {
              gap: 30px !important;
            }
          }
        `}</style>
      </section>
    
    </>
  )
}

export default AiPleadingPage
