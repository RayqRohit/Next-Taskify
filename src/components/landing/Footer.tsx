import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-100 py-16 bg-white text-center">
      <div className="page-container flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-8 mb-6 font-normal text-slate-500 text-base">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-slate-500 text-base">
          &copy; {new Date().getFullYear()} Taskify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
