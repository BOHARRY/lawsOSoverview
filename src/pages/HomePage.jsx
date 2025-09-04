import React, { useEffect } from 'react'

function HomePage() {
  // 數字動畫效果
  useEffect(() => {
    function animateNumber(element) {
      const target = parseInt(element.getAttribute('data-target'))
      const prefix = element.getAttribute('data-prefix') || ''
      const suffix = element.getAttribute('data-suffix') || ''
      const duration = 2000 // 2秒動畫
      const startTime = Date.now()

      element.classList.add('counting')

      function updateNumber() {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)

        // 使用緩動函數讓動畫更自然
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = Math.floor(easeOutQuart * target)

        element.textContent = prefix + current + suffix

        // 隨機添加震動效果
        if (Math.random() < 0.1 && progress < 0.9) {
          element.classList.add('bouncing')
          setTimeout(() => element.classList.remove('bouncing'), 600)
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber)
        } else {
          element.classList.remove('counting')
          // 最終確保顯示正確的目標值
          element.textContent = prefix + target + suffix
        }
      }

      updateNumber()
    }

    // 啟動所有數字動畫
    const animatedNumbers = document.querySelectorAll('.animated-number')
    animatedNumbers.forEach(element => {
      setTimeout(() => animateNumber(element), Math.random() * 500)
    })
  }, [])

  return (
    <>
      <header id="overview" className="page-header hero">
        <h1 className="page-title">
          <img 
            src="https://api.iconify.design/material-symbols:owl.svg" 
            alt="owl" 
            style={{width:'38px', height:'38px', verticalAlign:'-6px', marginRight:'10px'}}
          />
          LawsOS 一站式智慧案件整合平台
        </h1>
        <p className="page-subtitle">更全面、更透明的智慧備訟助手：不只查判決，還要幫你贏</p>
      </header>

      {/* KPI strip above the three core cards */}
      <section className="content-section2" aria-label="關鍵效益">
        <div className="kpi-strip">
          <div className="kpi-item" style={{padding:'18px 8px'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>備訟效率</div>
            <div 
              className="kpi-value animated-number" 
              data-target="60" 
              data-suffix="%" 
              data-prefix="+" 
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px'}}
            >
              +0%
            </div>
          </div>
          <div className="kpi-item" style={{padding:'18px 8px', borderLeft:'1px solid var(--border)'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>管理效率</div>
            <div 
              className="kpi-value animated-number" 
              data-target="85" 
              data-suffix="%" 
              data-prefix="+" 
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px'}}
            >
              +0%
            </div>
          </div>
          <div className="kpi-item" style={{padding:'18px 8px', borderLeft:'1px solid var(--border)'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>節省時間</div>
            <div 
              className="kpi-value animated-number" 
              data-target="200" 
              data-suffix="小時" 
              data-prefix="" 
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px'}}
            >
              0小時
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="content-section">
        <h2 className="section-title">關鍵特色</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:dashboard-outline.svg" alt="dashboard" />
            <div className="feature-content">
              <div className="feature-title">圖板案件管理</div>
              <div className="feature-description">視覺化案件細節，更高效的掌握案件脈絡。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:psychology-outline.svg" alt="ai-card" />
            <div className="feature-content">
              <div className="feature-title">知識AI卡片</div>
              <div className="feature-description">運用模型算力，延伸案件洞察力，找出致勝關鍵。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:find-in-page-outline.svg" alt="search" />
            <div className="feature-content">
              <div className="feature-title">智慧判決書查找</div>
              <div className="feature-description">除顯示摘要外，還可進行爭點語意檢索以及進階智慧搜索。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:edit-document-outline.svg" alt="document" />
            <div className="feature-content">
              <div className="feature-title">智慧訴狀生成</div>
              <div className="feature-description">藉由卡片脈絡，獲得遠超GPT語言模型的精確訴狀草稿。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:person-search-outline.svg" alt="lawyer" />
            <div className="feature-content">
              <div className="feature-title">查詢律師戰歷</div>
              <div className="feature-description">根據律師表現獲得過去戰績統計以及案件表現。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/mdi:scale-balance.svg" alt="judge" />
            <div className="feature-content">
              <div className="feature-title">分析法官傾向</div>
              <div className="feature-description">獲得法官於指定判決的傾向，以及代表案例和特徵洞察。</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* 數字動畫震動效果 */
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        .animated-number {
          transition: all 0.3s ease;
        }

        .animated-number.bouncing {
          animation: bounce 0.6s ease-in-out;
        }

        .animated-number.counting {
          color: var(--brand-green);
          text-shadow: 0 0 10px rgba(86, 183, 122, 0.3);
        }
      `}</style>
    </>
  )
}

export default HomePage
