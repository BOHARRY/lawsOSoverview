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
              <p style={{marginBottom: '0'}}>
                傳統 AI 訴狀生成僅套模板，內容鬆散難用。LawsOS 結合完整裁判資料庫、知識圖譜與案件結構化分析，
                讓 AI 精準掌握當事人、爭點與法條。生成結果邏輯嚴謹、引用完整，從「需重寫的草稿」進化為「可直接採用的初稿」，真正提升實務效率。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 方法對比區塊 */}
      <section className="content-section">
        <h2 className="section-title">為什麼 LawsOS 的訴狀生成更有效？</h2>

        {/* 對比區塊 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px',
          marginTop: '40px'
        }}>

          {/* 左側：傳統方式 */}
          <div style={{
            borderRadius: '20px',
            padding: '40px 30px',
            background: 'rgba(248, 250, 252, 0.8)',
            border: '1px solid #e2e8f0'
          }}>
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
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: '#f3f4f6',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <img src="https://api.iconify.design/material-symbols:description-outline.svg"
                       style={{width: '40px', height: '40px', color: '#6b7280'}} alt="data" />
                </div>
                <span style={{fontSize: '14px', color: '#6b7280', fontWeight: '500'}}>資料</span>
              </div>

              <img src="https://api.iconify.design/tabler:arrow-big-right-lines-filled.svg"
                   style={{width: '24px', height: '24px', color: '#9ca3af'}} alt="arrow" />

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: '#f3f4f6',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <img src="https://api.iconify.design/lets-icons:sad.svg"
                       style={{width: '40px', height: '40px', color: '#6b7280'}} alt="organize" />
                </div>
                <span style={{fontSize: '14px', color: '#6b7280', fontWeight: '500'}}>整理</span>
              </div>

              <img src="https://api.iconify.design/tabler:arrow-big-right-lines-filled.svg"
                   style={{width: '24px', height: '24px', color: '#9ca3af'}} alt="arrow" />

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: '#f3f4f6',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <img src="https://api.iconify.design/hugeicons:chat-gpt.svg"
                       style={{width: '40px', height: '40px', color: '#6b7280'}} alt="chatgpt" />
                </div>
                <span style={{fontSize: '14px', color: '#6b7280', fontWeight: '500'}}>ChatGPT</span>
              </div>

              <img src="https://api.iconify.design/tabler:arrow-big-right-lines-filled.svg"
                   style={{width: '24px', height: '24px', color: '#9ca3af'}} alt="arrow" />

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: '#f3f4f6',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <img src="https://api.iconify.design/material-symbols:book-5.svg"
                       style={{width: '40px', height: '40px', color: '#6b7280'}} alt="pleading" />
                </div>
                <span style={{fontSize: '14px', color: '#6b7280', fontWeight: '500'}}>訴狀</span>
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
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px'}}>
                <span style={{color: '#dc2626', fontSize: '20px', marginTop: '2px', fontWeight: 'bold'}}>✕</span>
                <span style={{fontSize: '16px', lineHeight: '1.6', color: '#475569'}}>
                  容易出現幻覺，脈絡隨機，根本不知道 AI 怎麼想的。
                </span>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px'}}>
                <span style={{color: '#dc2626', fontSize: '20px', marginTop: '2px', fontWeight: 'bold'}}>✕</span>
                <span style={{fontSize: '16px', lineHeight: '1.6', color: '#475569'}}>
                  出問題又要重新「骰一次」，浪費寶貴的時間！
                </span>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px'}}>
                <span style={{color: '#dc2626', fontSize: '20px', marginTop: '2px', fontWeight: 'bold'}}>✕</span>
                <span style={{fontSize: '16px', lineHeight: '1.6', color: '#475569'}}>
                  生硬套用模板，內容片段化、邏輯鬆散、引用不完整。
                </span>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
                <span style={{color: '#dc2626', fontSize: '20px', marginTop: '2px', fontWeight: 'bold'}}>✕</span>
                <span style={{fontSize: '16px', lineHeight: '1.6', color: '#475569'}}>
                  難以直接採用，拿到草稿還要重寫。
                </span>
              </div>
            </div>
          </div>

          {/* 右側：LawsOS 方式 */}
          <div style={{
            borderRadius: '20px',
            padding: '40px 30px',
            background: 'rgba(248, 250, 252, 0.8)',
            border: '1px solid #e2e8f0'
          }}>
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
              gap: '20px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: '#dcfce7',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <img src="https://api.iconify.design/material-symbols:dashboard-outline.svg"
                       style={{width: '40px', height: '40px', color: 'var(--brand-green)'}} alt="board" />
                </div>
                <span style={{fontSize: '14px', color: 'var(--brand-green)', fontWeight: '600'}}>圖板</span>
              </div>

              <img src="https://api.iconify.design/tabler:arrow-big-right-lines-filled.svg"
                   style={{width: '24px', height: '24px', color: 'var(--brand-green)'}} alt="arrow" />

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: '#dcfce7',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <img src="https://api.iconify.design/material-symbols:owl.svg"
                       style={{width: '40px', height: '40px', color: 'var(--brand-green)'}} alt="lawsos-ai" />
                </div>
                <span style={{fontSize: '14px', color: 'var(--brand-green)', fontWeight: '600'}}>LawsOS AI</span>
              </div>

              <img src="https://api.iconify.design/tabler:arrow-big-right-lines-filled.svg"
                   style={{width: '24px', height: '24px', color: 'var(--brand-green)'}} alt="arrow" />

              <div style={{textAlign: 'center'}}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: '#dcfce7',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <img src="https://api.iconify.design/material-symbols:book-5.svg"
                       style={{width: '40px', height: '40px', color: 'var(--brand-green)'}} alt="pleading" />
                </div>
                <span style={{fontSize: '14px', color: 'var(--brand-green)', fontWeight: '600'}}>訴狀</span>
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
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px'}}>
                <span style={{color: 'var(--brand-green)', fontSize: '20px', marginTop: '2px', fontWeight: 'bold'}}>✓</span>
                <span style={{fontSize: '17px', lineHeight: '1.6', color: 'var(--brand-green)', fontWeight: '600'}}>
                  完全透過圖板知識拓樸訴狀，結合完整案件脈絡。
                </span>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px'}}>
                <span style={{color: 'var(--brand-green)', fontSize: '20px', marginTop: '2px', fontWeight: 'bold'}}>✓</span>
                <span style={{fontSize: '17px', lineHeight: '1.6', color: 'var(--brand-green)', fontWeight: '600'}}>
                  讓每一次生成的訴狀都可「溯源」，犯錯隨時回去修正。
                </span>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px'}}>
                <span style={{color: 'var(--brand-green)', fontSize: '20px', marginTop: '2px', fontWeight: 'bold'}}>✓</span>
                <span style={{fontSize: '17px', lineHeight: '1.6', color: 'var(--brand-green)', fontWeight: '600'}}>
                  條理分明、引據充分，更貼近專業律師的寫作邏輯。
                </span>
              </div>

              <div style={{display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
                <span style={{color: 'var(--brand-green)', fontSize: '20px', marginTop: '2px', fontWeight: 'bold'}}>✓</span>
                <span style={{fontSize: '17px', lineHeight: '1.6', color: 'var(--brand-green)', fontWeight: '600'}}>
                  產出真正的訴狀草稿，直接可用的初稿基礎。
                </span>
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
