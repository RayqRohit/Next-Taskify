export default function StatsSection() {
  return (
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
  );
}

