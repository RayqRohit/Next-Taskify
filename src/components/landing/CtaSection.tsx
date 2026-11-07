import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-slate-50 rounded-[40px] my-16 mx-3 sm:mx-8 py-20 sm:py-32 text-center">
      <div className="page-container px-4 sm:px-6">
        <h2 className="font-body text-3xl sm:text-4xl md:text-[2.7rem] font-extrabold text-slate-900 tracking-tight mb-6">
          Ready to boost your productivity?
        </h2>
        <p className="font-body text-base sm:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed mb-12">
          Join thousands of teams who use Taskify to manage their work and reach
          their goals.
        </p>
        <Link
          href="/register"
          className="font-body inline-flex items-center justify-center font-semibold text-white bg-slate-900 px-10 py-4 text-lg rounded-full hover:scale-105 hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl"
        >
          Get Taskify for Free
        </Link>
      </div>
    </section>
  );
}
