import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      <Image
        src="/images/hero.webp"
        alt="ArkField"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />

      {/* voile léger sur toute l'image */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        {/* panneau texte très transparent */}
        <div className="rounded-3xl bg-black/10 backdrop-blur-[2px] border border-white/10 px-8 py-6 shadow-xl">

          <h1 className="text-white text-6xl md:text-8xl font-black tracking-widest drop-shadow-2xl">
            ARKFIELD
          </h1>

          <p className="mt-6 text-cyan-300 text-xl md:text-2xl font-semibold drop-shadow-lg">
            Cluster PvE Cross-Platform
          </p>

          <p className="mt-2 text-white text-lg drop-shadow-lg">
            Ark: Survival Ascended
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">

            <a
              href="/ascended"
              className="bg-green-400 hover:bg-green-300 text-black font-bold px-8 py-4 rounded-xl transition shadow-lg"
            >
              Cluster Ascended
            </a>

            <a
              href="/descended"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition shadow-lg"
            >
              Cluster Descended
            </a>

            <a
              href="https://discord.gg/mxZq2ArA66"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-xl transition shadow-lg"
            >
              Rejoindre Discord
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}