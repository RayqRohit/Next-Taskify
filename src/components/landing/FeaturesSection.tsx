import { Columns3, Users, Zap, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const FEATURES: Feature[] = [
  {
    icon: Columns3,
    title: "Intuitive Boards",
    text: 'Visualize your workflow with customizable boards. Move tasks from "To Do" to "Done" with simple drag-and-drop.',
  },
  {
    icon: Users,
    title: "Team Collaboration",
    text: "Invite your team to collaborate on projects. Assign tasks, leave comments, and stay in sync in real-time.",
  },
  {
    icon: Zap,
    title: "Powerful Automations",
    text: "Save time by automating repetitive tasks. Set up rules to move tasks, notify members, and clear roadblocks.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-32">
      <div className="page-container">
        {/* Section Title */}
        <h2 className="font-body text-[2.2rem] sm:text-[2.7rem] font-extrabold tracking-tight text-slate-900 text-left mb-14">
          A better way to work
        </h2>

        {/* Features List with semantic ul / li */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 p-0 m-0 list-none">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.title}
                className="bg-white p-8 rounded-3xl border border-slate-100 transition-all duration-300 text-left flex flex-col hover:-translate-y-1 hover:border-blue-600/10 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="w-[60px] h-[60px] rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-body text-2xl sm:text-[1.7rem] font-bold text-slate-900 mb-3.5 tracking-tight">
                  {feature.title}
                </h3>
                <p className="font-body text-[1.1rem] text-slate-500 leading-[1.7]">
                  {feature.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
