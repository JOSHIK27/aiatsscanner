import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="flex flex-col items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2024 ResuMatch. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
