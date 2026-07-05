import type { MouseEvent } from 'react'
import logo from '../assets/WhiteBgLogoHighQuality.png'

interface HeaderProps {
  isHome: boolean
  onHome: () => void
  onRegister: () => void
}

export default function Header({ isHome, onHome, onRegister }: HeaderProps) {
  const handleNav = (targetId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) {
      e.preventDefault()
      onHome()
      setTimeout(() => {
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-[14px] border-b border-[rgba(228,233,242,.7)]">
      <div className="cp-in h-18.5 flex items-center justify-between gap-5">
        <a onClick={onHome} className="flex items-center gap-2.75 cursor-pointer">
          <img src={logo} alt="ClickPrint" className="h-16 w-auto block" />
        </a>
        <nav className="cp-nav flex items-center gap-7.5 text-[14.5px] font-semibold text-muted">
          <a href="#how" onClick={handleNav('how')}>How it works</a>
          <a href="#why" onClick={handleNav('why')}>Why partner</a>
          <a href="#download" onClick={handleNav('download')}>Get the app</a>
          <a href="#faq" onClick={handleNav('faq')}>FAQ</a>
        </nav>
        <button
          onClick={onRegister}
          className="cp-btn-primary border-none cursor-pointer font-manrope font-bold text-[14.5px] text-white bg-coral px-5.5 py-3 rounded-xl whitespace-nowrap shadow-[0_8px_22px_rgba(255,139,123,.32)]"
        >
          Register your shop
        </button>
      </div>
    </header>
  )
}
