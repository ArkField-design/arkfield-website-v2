import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">

      {/* Fond transparent de la navbar */}
      <div className="bg-black/50 backdrop-blur-md px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Image
            src="/images/logo.webp"
            alt="ArkField Logo"
            width={45}
            height={45}
            className="object-contain"
          />

          <h1 className="text-cyan-400 text-2xl font-bold tracking-widest">
            ARKFIELD
          </h1>

        </div>


        <div className="flex items-center gap-8 text-white font-medium">

          <a
            href="/"
            className="hover:text-cyan-400 transition"
          >
            Accueil
          </a>


          <a
            href="/ascended"
            className="hover:text-cyan-400 transition"
          >
            Ascended
          </a>


          <a
            href="/descended"
            className="hover:text-cyan-400 transition"
          >
            Descended
          </a>


          <a
            href="https://discord.gg/mxZq2ArA66"
            target="_blank"
            className="
            bg-cyan-400 
            text-black 
            px-5 
            py-2 
            rounded-xl 
            font-bold
            hover:bg-cyan-300 
            transition"
          >
            Discord
          </a>

        </div>

      </div>

    </nav>
  );
}