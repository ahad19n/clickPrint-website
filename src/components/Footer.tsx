import logo from '../assets/WhiteBgLogoHighQuality.png'

interface FooterProps {
  onRegister: () => void
}

export default function Footer({ onRegister }: FooterProps) {
  return (
    <footer className="bg-navy text-white pt-[60px] pb-8 mt-5">
      <div className="cp-in">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-9 pb-10 border-b border-white/10">
          <div>
            <div className="bg-white rounded-[14px] px-[14px] py-[10px] inline-block">
              <img src={logo} alt="Click Print" className="h-[34px] block" />
            </div>
            <p className="text-white/60 text-[14.5px] leading-[1.65] max-w-[300px] mt-[18px] mb-5">
              The distributed printing network turning campus print shops into always‑on, pre‑paid businesses.
            </p>
            <div className="flex gap-[10px]">
              <a href="#" className="w-[38px] h-[38px] rounded-[11px] bg-white/10 flex items-center justify-center text-[15px] font-bold">in</a>
              <a href="#" className="w-[38px] h-[38px] rounded-[11px] bg-white/10 flex items-center justify-center text-[15px] font-bold">𝕏</a>
              <a href="#" className="w-[38px] h-[38px] rounded-[11px] bg-white/10 flex items-center justify-center text-[15px] font-bold">f</a>
            </div>
          </div>
          <div>
            <div className="font-sora font-bold text-[13px] text-white/50 uppercase tracking-[.5px] mb-4">For shops</div>
            <div className="flex flex-col gap-3 text-[14.5px] text-white/75">
              <a onClick={onRegister} className="cursor-pointer">Register your shop</a>
              <a href="#how">How it works</a>
              <a href="#why">Why partner</a>
              <a href="#download">Get the app</a>
            </div>
          </div>
          <div>
            <div className="font-sora font-bold text-[13px] text-white/50 uppercase tracking-[.5px] mb-4">Company</div>
            <div className="flex flex-col gap-3 text-[14.5px] text-white/75">
              <a href="#">About Click Print</a>
              <a href="#">For students</a>
              <a href="#">For campuses</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div>
            <div className="font-sora font-bold text-[13px] text-white/50 uppercase tracking-[.5px] mb-4">Get in touch</div>
            <div className="flex flex-col gap-3 text-[14.5px] text-white/75">
              <a href="https://wa.me/920000000000">WhatsApp: +92 000 0000000</a>
              <a href="mailto:shops@clickprint.app">shops@clickprint.app</a>
              <a href="#">Help center</a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-3 pt-6 text-[13px] text-white/50">
          <div>© 2026 Click Print. Campus printing, automated.</div>
          <div className="flex gap-[22px]">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
