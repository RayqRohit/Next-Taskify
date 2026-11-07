import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="w-full text-center relative overflow-hidden mt-[70px] sm:mt-[80px] py-14 sm:py-[7rem]"
      style={{
        background:
          "radial-gradient(circle at 100% 0%, rgba(219, 234, 254, 0.75) 0%, rgba(239, 246, 255, 0.45) 30%, transparent 60%), radial-gradient(circle at 0% 100%, rgba(254, 226, 226, 0.65) 0%, rgba(254, 242, 242, 0.35) 30%, transparent 60%), #ffffff",
      }}
    >
      <div className="container">
        <div className="max-w-full mx-auto relative z-10 px-2 sm:px-0">
          {/* Rocket Announcement Badge */}
          <div className="inline-flex items-center gap-[0.6rem] px-[1rem] py-[0.5rem] sm:px-[1.25rem] sm:py-[0.6rem] rounded-full bg-[#eff6ff] border border-[#2563eb]/10 text-xs sm:text-[0.8125rem] font-bold text-[#2563eb] tracking-[0.05em] mb-6 sm:mb-[2.5rem] font-body">
            <i className="fas fa-rocket"></i>
            <span>NEW: TASKIFY 2.0 IS HERE</span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-[#0f172a] font-bold leading-[1.15] sm:leading-[1.2] mb-4 sm:mb-[1.5rem] break-words">
            Everything you need to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent inline-block">
              Work Forward.
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="font-body text-base sm:text-[1.25rem] text-[#64748b] max-w-[650px] mx-auto mb-8 sm:mb-[3.5rem] leading-[1.6] sm:leading-[1.7] px-2">
            Collaborate, manage projects, and reach new productivity peaks. From
            high-rise buildings to remote offices, the way your team works is
            unique – accomplish it all with Taskify.
          </p>

          {/* Hero CTA Actions */}
          <div className="font-body w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/register"
              className="w-full sm:w-auto inline-block bg-[#0f172a] text-white px-8 sm:px-[2.5rem] py-3.5 sm:py-[1rem] text-base sm:text-[1.125rem] font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Get started for free
            </Link>
            <p className="mt-3 sm:mt-4 text-[#64748b] text-xs sm:text-[0.875rem]">
              No credit card required. Unlimited boards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

