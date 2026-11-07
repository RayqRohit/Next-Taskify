import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[70px] sm:h-[80px] border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="page-container h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
            <Image
              src="/Taskify-logo.svg"
              alt="Taskify Logo"
              width={36}
              height={36}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-body text-2xl sm:text-[1.8rem] font-extrabold tracking-tight text-slate-900 leading-none">
            Taskify
          </span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link
            href="/login"
            className="text-xs sm:text-sm font-semibold text-slate-900 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors whitespace-nowrap"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-xs sm:text-sm font-semibold text-white bg-slate-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-xs whitespace-nowrap"
          >
            Get Taskify for free
          </Link>
        </nav>
      </div>
    </header>
  );
}
