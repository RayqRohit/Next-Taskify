import Link from "next/link";
import { Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="w-full text-center relative overflow-hidden mt-[70px] sm:mt-[80px] py-14 sm:py-28"
      style={{
        background:
          "radial-gradient(circle at 100% 0%, rgba(219, 234, 254, 0.75) 0%, rgba(239, 246, 255, 0.45) 30%, transparent 60%), radial-gradient(circle at 0% 100%, rgba(254, 226, 226, 0.65) 0%, rgba(254, 242, 242, 0.35) 30%, transparent 60%), #ffffff",
      }}
    >
      <div className="page-container">
        <div className="max-w-full mx-auto relative z-10 px-2 sm:px-0">
          {/* Rocket Announcement Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs sm:text-[13px] font-bold text-blue-600 tracking-wider mb-6 sm:mb-10 font-body shadow-xs">
            <Rocket className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            <span>NEW: TASKIFY 2.0 IS HERE</span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-slate-900 font-bold leading-[1.15] sm:leading-[1.2] mb-4 sm:mb-6 tracking-tight break-words">
            Everything you need to <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent inline-block">
              Work Forward.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="font-body text-base sm:text-xl text-slate-500 max-w-[650px] mx-auto mb-8 sm:mb-14 leading-relaxed px-2">
            Collaborate, manage projects, and reach new productivity peaks. From
            high-rise buildings to remote offices, the way your team works is
            unique – accomplish it all with Taskify.
          </p>

          {/* Hero CTA Actions */}
          <div className="font-body w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/register"
              className="w-full sm:w-auto inline-block bg-slate-900 text-white px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:scale-105 hover:bg-slate-800 hover:shadow-lg transition-all duration-300"
            >
              Get started for free
            </Link>
            <p className="mt-3 sm:mt-4 text-slate-500 text-xs sm:text-sm">
              No credit card required. Unlimited boards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
