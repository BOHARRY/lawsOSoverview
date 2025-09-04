import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import BoardPage from './pages/BoardPage'
import CaseSearchPage from './pages/CaseSearchPage'
import LawyerPage from './pages/LawyerPage'
import JudgePage from './pages/JudgePage'
import AiPleadingPage from './pages/AiPleadingPage'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/case-search" element={<CaseSearchPage />} />
          <Route path="/lawyer" element={<LawyerPage />} />
          <Route path="/judge" element={<JudgePage />} />
          <Route path="/ai-pleading" element={<AiPleadingPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
