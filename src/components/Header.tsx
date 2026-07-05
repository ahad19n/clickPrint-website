import logo from '../assets/WhiteBgLogoHighQuality.png'

interface HeaderProps {
  isHome: boolean
  onHome: () => void
  onRegister: () => void
}

export default function Header({ isHome, onHome, onRegister }: HeaderProps) {
  const navLink = isHome ? 'inline' : 'hidden'
  return (
    <header className="sticky top-0 z-50 bg-[rgba(247,248,250,.82)] backdrop-blur-[14px] border-b border-[rgba(228,233,242,.7)]">
      <div className="cp-in h-[74px] flex items-center justify-between gap-5">
        <a onClick={onHome} className="flex items-center gap-[11px] cursor-pointer">
          <img src={logo} alt="Click Print" className="h-[38px] w-auto block" />
        </a>
        <nav className="cp-nav flex items-center gap-[30px] text-[14.5px] font-semibold text-muted">
          <a href="#how" className={navLink}>How it works</a>
          <a href="#why" className={navLink}>Why partner</a>
          <a href="#download" className={navLink}>Get the app</a>
          <a href="#faq" className={navLink}>FAQ</a>
        </nav>
        <button
          onClick={onRegister}
          className="cp-btn-primary border-none cursor-pointer font-manrope font-bold text-[14.5px] text-white bg-coral px-[22px] py-3 rounded-xl whitespace-nowrap shadow-[0_8px_22px_rgba(255,139,123,.32)]"
        >
          Register your shop
        </button>
      </div>
    </header>
  )
}
