import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const location = useLocation()

  // 檢查是否為移動端設備
  const isMobile = () => {
    return window.innerWidth <= 768
  }

  // 處理滾動事件和窗口大小變化，決定是否顯示移動端按鈕
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile()) {
        // 移動端：滾動超過 100px 或者在頁面頂部時顯示按鈕
        const scrolled = window.scrollY > 100 || window.scrollY === 0
        setShowButton(scrolled)
      } else {
        // 桌面端：隱藏按鈕
        setShowButton(false)
        setIsOpen(false) // 桌面端時關閉側邊欄
      }
    }

    const handleResize = () => {
      handleScroll() // 窗口大小變化時重新檢查
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleScroll() // 初始檢查

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // 處理 ESC 鍵關閉側邊欄
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <>
      {/* 側邊欄 */}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img
              src="https://api.iconify.design/material-symbols:owl.svg"
              alt="owl"
              style={{
                filter: 'invert(1)',
                width: '50px',
                height: '50px',
                verticalAlign: '-4px',
                marginRight: '8px'
              }}
            />
            <span style={{ fontSize: '2rem' }}>LawsOS</span>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-section-title">功能導覽</div>
          <Link 
            to="/" 
            className={`nav-item ${isActive('/') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            主頁
          </Link>
          <Link 
            to="/board" 
            className={`nav-item ${isActive('/board') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            知識圖板
          </Link>
          <Link 
            to="/case-search" 
            className={`nav-item ${isActive('/case-search') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            判決查找
          </Link>
          <Link 
            to="/lawyer" 
            className={`nav-item ${isActive('/lawyer') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            律師戰歷
          </Link>
          <Link 
            to="/judge" 
            className={`nav-item ${isActive('/judge') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            法官傾向
          </Link>
          <Link 
            to="/ai-pleading" 
            className={`nav-item ${isActive('/ai-pleading') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            訴狀生成
          </Link>
        </div>
      </nav>

      {/* 移動端切換按鈕 */}
      <button
        className={`mobile-toggle ${showButton ? 'show' : 'hide'} ${isOpen ? 'close-mode' : ''}`}
        onClick={toggleSidebar}
        aria-controls="sidebar"
        aria-expanded={isOpen}
      >
        {isOpen ? '✕ 關閉' : '☰ 功能導覽'}
      </button>

      {/* 背景遮罩 */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default Sidebar
