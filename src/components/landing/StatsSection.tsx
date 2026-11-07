interface Stat {
  number: string;
  label: string;
}

const STATS: Stat[] = [
  { number: "10M+", label: "Users Worldwide" },
  { number: "50K+", label: "Active Teams" },
  { number: "99.9%", label: "Uptime Support" },
  { number: "4.9/5", label: "User Rating" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-slate-900 py-24 text-white">
      <div className="page-container grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-body text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-2 leading-none">
              {stat.number}
            </span>
            <span className="font-body text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
