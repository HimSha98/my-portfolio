// components/navbar/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">

      <div className="container mx-auto px-4 sm:px-6">

        <nav className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 sm:px-6 py-4 backdrop-blur-md">

          <h2 className="text-xl sm:text-2xl font-bold text-violet-400">
            Himanshu <span className="hidden sm:inline">Sharma</span>
          </h2>

          <div className="hidden gap-8 md:flex">

            <Link href="/">Home</Link>

            <Link href="#about">About</Link>

            <Link href="#skills">Skills</Link>

            <Link href="#projects">Projects</Link>

            <Link href="#contact">Contact</Link>

          </div>

          <div className="flex gap-3">

            {/* Future Theme Toggle */}

            {/* <button className="rounded-xl border border-white/10 px-4 py-2">
              🌙
            </button> */}

            <Link
              href="#contact"
              className="rounded-xl bg-violet-600 px-3 sm:px-5 py-1 sm:py-2"
            >
              Contact Me
            </Link>

          </div>

        </nav>

      </div>

    </header>
  );
}