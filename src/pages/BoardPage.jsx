import React, { useState } from 'react'

function BoardPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const cardData = [
    {
      id: 'case-planning',
      title: '案件規劃卡',
      badge: '基礎',
      icon: 'https://api.iconify.design/material-symbols:assignment-outline.svg',
      description: '主導案件脈絡和立場的底層卡片，輸入案由，法院層級，辯護立場和案件描述，為後續案件分析建立基礎索引。',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&auto=format',
      details: [
        '📋 案由與法院層級設定',
        '⚖️ 辯護立場明確定義',
        '📝 案件描述詳細記錄',
        '🔗 基礎索引建立'
      ]
    },
    {
      id: 'auxiliary-cards',
      title: '輔助卡群',
      badge: '資料',
      icon: 'https://api.iconify.design/material-symbols:sticky-note-2-outline.svg',
      description: '便條紙卡、爭點卡、主張卡、證據卡，整理案件相關的輔助資料，作為後續AI類卡片的重要資料索引。',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format',
      details: [
        '📝 便條紙卡記錄要點',
        '⚡ 爭點卡整理爭議',
        '💭 主張卡明確立場',
        '📄 證據卡管理資料'
      ]
    },
    {
      id: 'smart-law',
      title: '智慧法條卡',
      badge: 'AI',
      icon: 'https://api.iconify.design/material-symbols:gavel.svg',
      description: '除了搜尋相關案件法條，並且支援AI語意搜索功能，確保該案件有法源相關的依據。',
      image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=250&fit=crop&auto=format',
      details: [
        '🔍 相關法條智慧搜尋',
        '🤖 AI語意搜索功能',
        '⚖️ 法源依據確保',
        '📚 條文關聯性分析'
      ]
    },
    {
      id: 'common-analysis',
      title: '共同點分析卡',
      badge: '分析',
      icon: 'https://api.iconify.design/material-symbols:analytics-outline.svg',
      description: '連結白板上的多個判決參考進行推理，提供判決的整合資訊，分析多個判決的共通性和關聯性，並提供援引脈絡。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format',
      details: [
        '🔗 多判決連結推理',
        '📊 判決整合資訊',
        '🎯 共通性關聯分析',
        '📖 援引脈絡提供'
      ]
    },
    {
      id: 'case-judgment',
      title: '案件判決分析卡',
      badge: '核心',
      icon: 'https://api.iconify.design/material-symbols:fact-check-outline.svg',
      description: '根據案由和立場，從資料庫中提取相關案例，並提供防禦比例和風險因素等洞察資訊，同時透過該卡片生成更多智慧卡片資訊。',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format',
      details: [
        '📊 相關案例提取',
        '🛡️ 防禦比例分析',
        '⚠️ 風險因素評估',
        '🔮 智慧卡片生成'
      ]
    },
    {
      id: 'mainstream-judgment',
      title: '主流判決歸納卡',
      badge: '策略',
      icon: 'https://api.iconify.design/material-symbols:summarize-outline.svg',
      description: '根據案件判決分析，獲得摘要、攻防策略、原告可能弱點和抗辯要點等資訊，為案件提供更多的切點面向。',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop&auto=format',
      details: [
        '📋 判決摘要歸納',
        '⚔️ 攻防策略分析',
        '🎯 原告弱點識別',
        '🛡️ 抗辯要點整理'
      ]
    },
    {
      id: 'citation-analysis',
      title: '援引判決分析卡',
      badge: '參考',
      icon: 'https://api.iconify.design/material-symbols:link-outline.svg',
      description: '根據案件判決分析，獲得相關判決中的援引判例，並提供可援引的參考價值。',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop&auto=format',
      details: [
        '📚 援引判例提取',
        '🔗 判決關聯分析',
        '💎 參考價值評估',
        '📖 援引建議提供'
      ]
    },
    {
      id: 'anomaly-cases',
      title: '異常案例卡',
      badge: '洞察',
      icon: 'https://api.iconify.design/material-symbols:warning-outline.svg',
      description: '根據案件判決分析，從提取的相關判決中，了解資料庫中相關的特殊實際判決，提供更多洞察機會。',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop&auto=format',
      details: [
        '🔍 特殊判決識別',
        '💡 異常案例分析',
        '🎯 洞察機會發現',
        '📊 特殊模式歸納'
      ]
    },
    {
      id: 'pleading-draft',
      title: '訴狀草稿生成卡',
      badge: '生成',
      icon: 'https://api.iconify.design/material-symbols:description-outline.svg',
      description: '根據案件規劃卡、輔助卡群、智慧分析卡等卡片，系統整合資訊後生成各類訴狀，且隨時可以進行卡片調整，保持智慧訴狀生成的公開透明性。',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop&auto=format',
      details: [
        '📝 多卡片資訊整合',
        '⚖️ 各類訴狀生成',
        '🔄 即時卡片調整',
        '🔍 生成過程透明'
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cardData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cardData.length) % cardData.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // 觸摸手勢處理
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

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
        <div className="card-carousel">
          <div className="carousel-container">
            {/* 左箭頭 */}
            <button className="carousel-btn prev" onClick={prevSlide}>
              <img src="https://api.iconify.design/material-symbols:chevron-left.svg" alt="previous" />
            </button>

            {/* 輪播內容 */}
            <div
              className="carousel-content"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="carousel-slide">
                <div className="slide-image">
                  <img src={cardData[currentSlide].image} alt={cardData[currentSlide].title} />
                  <div className="image-overlay">
                    <img className="card-icon-large" src={cardData[currentSlide].icon} alt="icon" />
                  </div>
                </div>
                <div className="slide-content">
                  <div className="slide-header">
                    <div className="slide-title-row">
                      <h3>{cardData[currentSlide].title}</h3>
                      <span className={`slide-badge badge-${cardData[currentSlide].id}`}>
                        {cardData[currentSlide].badge}
                      </span>
                    </div>
                    <p className="slide-description">{cardData[currentSlide].description}</p>
                  </div>
                  <div className="slide-details">
                    <div className="details-container">
                      {cardData[currentSlide].details.map((detail, index) => (
                        <div key={index} className="detail-item">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右箭頭 */}
            <button className="carousel-btn next" onClick={nextSlide}>
              <img src="https://api.iconify.design/material-symbols:chevron-right.svg" alt="next" />
            </button>
          </div>

          {/* 指示點 */}
          <div className="carousel-dots">
            {cardData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
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
