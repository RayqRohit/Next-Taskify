import Link from "next/link";

export default function Footer() {
  return (
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
  );
}

