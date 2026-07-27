"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.jpg"
            alt="ArkField"
            width={55}
            height={55}
            className="rounded-full border border-cyan-500"
          />

          <span className="text-3xl font-bold text-cyan-400 tracking-widest">
            ARKFIELD
          </span>
        </Link>

        <nav className="flex items-center gap-10 text-lg">

          <Link
            href="/"
            className="text-white hover:text-cyan-400 transition"
          >
            Accueil
          </Link>

          <Link
            href="/ascended"
            className="text-white hover:text-green-400 transition"
          >
            Ascended
          </Link>

          <Link
            href="/descended"
            className="text-white hover:text-yellow-400 transition"
          >
            Descended
          </Link>

          <a
            href="https://discord.gg/mxZq2ArA66"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-2 rounded-xl transition"
          >
            Discord
          </a>

        </nav>
      </div>
    </header>
  );
}