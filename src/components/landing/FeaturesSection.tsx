export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-32">
      <div className="container">
        {/* Section Title */}
        <h2 className="font-body text-[2.2rem] sm:text-[2.7rem] font-extrabold tracking-[-0.02em] text-[#0F172A] text-left mb-14">
          A better way to work
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Intuitive Boards */}
          <div className="feature-card flex flex-col">
            <div className="w-[60px] h-[60px] rounded-[14px] bg-[#eff6ff] flex items-center justify-center text-[#2563eb] text-2xl mb-8">
              <i className="fas fa-columns"></i>
            </div>
            <h3 className="font-body text-[1.5rem] sm:text-[1.7rem] font-bold text-[#0F172A] mb-3.5 tracking-tight">
              Intuitive Boards
            </h3>
            <p className="font-body text-[15px] sm:text-[16px] text-[#64748B] leading-[1.7]">
              Visualize your workflow with customizable boards. Move tasks from &quot;To Do&quot; to &quot;Done&quot; with simple drag-and-drop.
            </p>
          </div>

          {/* Card 2: Team Collaboration */}
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

          {/* Card 3: Powerful Automations */}
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
  );
}

