import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-8">
      <div className="page-container max-w-6xl bg-slate-50 rounded-[40px] py-16 sm:py-28 px-6 sm:px-12 text-center">
        <h2 className="font-body text-3xl sm:text-4xl md:text-[2.7rem] font-extrabold text-slate-900 tracking-tight mb-6">
          Ready to boost your productivity?
        </h2>
        <p className="font-body text-base sm:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed mb-10">
          Join thousands of teams who use Taskify to manage their work and reach
          their goals.
        </p>
        <Link
          href="/register"
          className="font-body inline-flex items-center justify-center font-semibold text-white bg-slate-900 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg hover:scale-105 hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl"
        >
          Get Taskify for Free
        </Link>
      </div>
    </section>
  );
}
