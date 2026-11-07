import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="cta-box">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="section-title">Ready to boost your productivity?</h2>
        <p className="cta-description">
          Join thousands of teams who use Taskify to manage their work and reach
          their goals.
        </p>
        <Link href="/register" className="btn-primary-large">
          Get Taskify for Free
        </Link>
      </div>
    </section>
  );
}

