import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

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
          案件圖板管理
        </h1>
        <p className="page-subtitle">提供開放式的白板，運用卡片整理案件脈絡和資訊， 透過AI功能獲得稀有援引資料、潛在有利見解、關鍵致勝因子。</p>
      </header>

      {/* 圖板示意 */}
      <section className="content-section3">
        <div className="image-viewer-container">

          <div className="viewer-wrapper">
            <TransformWrapper
              initialScale={4}
              minScale={0.2}
              maxScale={8}
              wheel={{ step: 0.15 }}
              pinch={{ step: 5 }}
              doubleClick={{ step: 0.7 }}
              centerOnInit={true}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div className="viewer-controls-overlay">
                    <button className="control-btn" onClick={() => zoomIn()} title="放大">
                      <img className="icon-16" src="https://api.iconify.design/material-symbols:zoom-in.svg" alt="放大" />
                    </button>
                    <button className="control-btn" onClick={() => zoomOut()} title="縮小">
                      <img className="icon-16" src="https://api.iconify.design/material-symbols:zoom-out.svg" alt="縮小" />
                    </button>
                    <button className="control-btn" onClick={() => resetTransform()} title="重置視圖">
                      <img className="icon-16" src="https://api.iconify.design/material-symbols:refresh.svg" alt="重置" />
                    </button>
                  </div>
                  <TransformComponent wrapperClass="transform-wrapper" contentClass="transform-content">
                    <img
                      src="/lawsOSoverview/board_sample_pic.jpg"
                      alt="案件圖板管理示意圖"
                      className="board-sample-image"
                      draggable={false}
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>

          <div className="viewer-instructions">
            <div className="instruction-item">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:drag-pan.svg" alt="拖拽" />
              <span>拖拽移動視圖</span>
            </div>
            <div className="instruction-item">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:zoom-in.svg" alt="縮放" />
              <span>滾輪縮放圖片</span>
            </div>
            <div className="instruction-item">
              <img className="icon-16" src="https://api.iconify.design/material-symbols:touch-app.svg" alt="雙擊" />
              <span>雙擊快速縮放</span>
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

      
      {/* 價值主張 */}
      <div className="kpi-strip-title">
        價值主張
      </div>

      <section className="content-section2" aria-label="價值主張">
        <div className="kpi-strip">
          <div className="kpi-item" style={{padding:'18px 8px'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>案件理解速度</div>
            <div
              className="kpi-value"
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px', color:'var(--brand-green)'}}
            >
              +200%
            </div>
          </div>
          <div className="kpi-item" style={{padding:'18px 8px', borderLeft:'1px solid var(--border)'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>資訊整理效率</div>
            <div
              className="kpi-value"
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px', color:'var(--brand-green)'}}
            >
              +150%
            </div>
          </div>
          <div className="kpi-item" style={{padding:'18px 8px', borderLeft:'1px solid var(--border)'}}>
            <div className="kpi-title" style={{fontSize:'24px', color:'var(--kpi-text)'}}>發現隱藏機會</div>
            <div
              className="kpi-value"
              style={{fontSize:'54px', fontWeight:'800', lineHeight:'1.1', marginTop:'6px', color:'var(--brand-green)'}}
            >
              +300%
            </div>
          </div>
        </div>
      </section>

      {/* AI 圖板功能 */}
      <section className="content-section">
        <h2 className="section-title">AI 圖板功能</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:library-books-outline.svg" alt="rare-resources" />
            <div className="feature-content">
              <div className="feature-title">稀有援引資料</div>
              <div className="feature-description">AI 深度挖掘罕見判例、特殊見解，發現對案件有利的稀有法律資源。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:lightbulb-outline.svg" alt="insights" />
            <div className="feature-content">
              <div className="feature-title">潛在有利見解</div>
              <div className="feature-description">智慧分析案件脈絡，識別可能被忽略的有利論點和法律觀點。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:key-outline.svg" alt="key-factors" />
            <div className="feature-content">
              <div className="feature-title">關鍵致勝因子</div>
              <div className="feature-description">基於大數據分析，識別影響案件結果的關鍵要素和決定性因素。</div>
            </div>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://api.iconify.design/material-symbols:swords.svg" alt="strategy" />
            <div className="feature-content">
              <div className="feature-title">攻防策略優化</div>
              <div className="feature-description">提供多角度攻防策略建議，包含主張論述、反駁要點、風險評估。</div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default BoardPage
