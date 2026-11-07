import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white overflow-hidden selection:bg-[#2563EB] selection:text-white font-body">
      {/* Header / Navbar - Fixed at the top matching Taskify */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-[70px] sm:h-[80px] border-b border-[#f3f4f6] bg-white/80 backdrop-blur-md">
        <div className="container h-full flex items-center justify-between">
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
            <span className="font-body text-2xl sm:text-[1.8rem] font-extrabold tracking-[-0.025em] text-[#0F172A] leading-none">
              Taskify
            </span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4 shrink-0">
            <Link
              href="/login"
              className="text-xs sm:text-sm font-semibold text-[#0F172A] px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#e5e7eb] hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-colors whitespace-nowrap"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-xs sm:text-sm font-semibold text-white bg-[#0F172A] px-4 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-xs whitespace-nowrap"
            >
              Get Taskify for free
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="w-full text-center relative overflow-hidden mt-[70px] sm:mt-[80px] py-14 sm:py-[7rem]"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(219, 234, 254, 0.75) 0%, rgba(239, 246, 255, 0.45) 30%, transparent 60%), radial-gradient(circle at 0% 100%, rgba(254, 226, 226, 0.65) 0%, rgba(254, 242, 242, 0.35) 30%, transparent 60%), #ffffff",
        }}
      >
        <div className="container">
          <div className="max-w-full mx-auto relative z-10 px-2 sm:px-0">
            {/* Rocket Badge */}
            <div className="inline-flex items-center gap-[0.6rem] px-[1rem] py-[0.5rem] sm:px-[1.25rem] sm:py-[0.6rem] rounded-full bg-[#eff6ff] border border-[#2563eb]/10 text-xs sm:text-[0.8125rem] font-bold text-[#2563eb] tracking-[0.05em] mb-6 sm:mb-[2.5rem] font-body">
              <i className="fas fa-rocket"></i>
              <span>NEW: TASKIFY 2.0 IS HERE</span>
            </div>

            {/* Hero Title */}
            <h1 className="font-display text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-[#0f172a] font-bold leading-[1.15] sm:leading-[1.2] mb-4 sm:mb-[1.5rem] tracking-[-0.02em] break-words">
              Everything you need to <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent inline-block">
                Work Forward.
              </span>
            </h1>

            {/* Hero Description */}
            <p className="font-body text-base sm:text-[1.25rem] text-[#64748b] max-w-[650px] mx-auto mb-8 sm:mb-[3.5rem] leading-[1.6] sm:leading-[1.7] px-2">
              Collaborate, manage projects, and reach new productivity peaks.
              From high-rise buildings to remote offices, the way your team
              works is unique – accomplish it all with Taskify.
            </p>

            {/* Hero Actions */}
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

      {/* Features Section - Pure Clean White Background matching Taskify .section (padding: 8rem 0) */}
      <section className="w-full bg-white py-32">
        <div className="container">
          {/* Section Title */}
          <h2 className="font-body text-[2.2rem] sm:text-[2.7rem] font-extrabold tracking-[-0.02em] text-[#0F172A] text-left mb-14">
            A better way to work
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card flex flex-col">
              <div className="w-[60px] h-[60px] rounded-[14px] bg-[#eff6ff] flex items-center justify-center text-[#2563eb] text-2xl mb-8">
                <i className="fas fa-columns"></i>
              </div>
              <h3 className="font-body text-[1.5rem] sm:text-[1.7rem] font-bold text-[#0F172A] mb-3.5 tracking-tight">
                Intuitive Boards
              </h3>
              <p className="font-body text-[16px] sm:text-[18px] text-[#64748B] leading-[1.7]">
                Visualize your workflow with customizable boards. Move tasks from &quot;To Do&quot; to &quot;Done&quot; with simple drag-and-drop.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card flex flex-col">
              <div className="w-[60px] h-[60px] rounded-[14px] bg-[#eff6ff] flex items-center justify-center text-[#2563eb] text-2xl mb-8">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="font-body text-[1.5rem] sm:text-[1.7rem] font-bold text-[#0F172A] mb-3.5 tracking-tight">
                Team Collaboration
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] text-[#64748B] leading-[1.7]">
                Invite your team to collaborate on projects. Assign tasks, leave comments, and stay in sync in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card flex flex-col">
              <div className="w-[60px] h-[60px] rounded-[14px] bg-[#eff6ff] flex items-center justify-center text-[#2563eb] text-2xl mb-8">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="font-body text-[1.5rem] sm:text-[1.7rem] font-bold text-[#0F172A] mb-3.5 tracking-tight">
                Powerful Automations
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] text-[#64748B] leading-[1.7]">
                Save time by automating repetitive tasks. Set up rules to move tasks, notify members, and clear roadblocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - matching Taskify/index.php:106-127 & main.css:540-572 */}
      <section className="stats-section">
        <div className="container stats-grid">
          {/* Stat 1 */}
          <div className="stat-item">
            <span className="stat-number">10M+</span>
            <span className="stat-label">Users Worldwide</span>
          </div>

          {/* Stat 2 */}
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Active Teams</span>
          </div>

          {/* Stat 3 */}
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime Support</span>
          </div>

          {/* Stat 4 */}
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">User Rating</span>
          </div>
        </div>
      </section>

      {/* CTA Section - matching Taskify/index.php:130-138 & main.css */}
      <section className="cta-box">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">
            Ready to boost your productivity?
          </h2>
          <p className="cta-description">
            Join thousands of teams who use Taskify to manage their work and reach their goals.
          </p>
          <Link href="/register" className="btn-primary-large">
            Get Taskify for Free
          </Link>
        </div>
      </section>

      {/* Footer - exact Taskify classes */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Taskify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
