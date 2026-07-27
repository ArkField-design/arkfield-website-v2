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
        className="object-contain"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-white text-6xl md:text-8xl font-black tracking-widest drop-shadow-2xl">
          ARKFIELD
        </h1>

        <p className="mt-6 text-cyan-300 text-xl md:text-2xl">
          Cluster PvE Cross-Platform
        </p>

        <p className="mt-2 text-white/90">
          Ark Survival Ascended & Ark Survival Evolved
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">

          <a
            href="/ascended"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl transition text-lg"
          >
            Cluster Ascended
          </a>

          <a
            href="/descended"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition text-lg"
          >
            Cluster Descended
          </a>

          <a
            href="https://discord.gg/"
            target="_blank"
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-xl transition text-lg"
          >
            Rejoindre Discord
          </a>

        </div>

      </div>

    </section>
  );
}