function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="UniAlDía, inicio">
      <span className="logo-mark"><img src="/images/logo-icon.png" alt="" className="h-[39px] w-[39px] object-contain" /></span>
      <span className={`text-[1.75rem] font-black tracking-[-0.07em] ${light ? 'text-cream' : 'text-navy'}`}>Uni<span className="text-coral">AlDía</span></span>
    </a>
  );
}

export default Logo;
