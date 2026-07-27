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

      {/* Assombrissement léger pour la lisibilité */}
      <div className="absolute inset-0 bg-black/20"></div>


      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 -translate-y-16">

        {/* Bloc texte transparent */}
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl px-10 py-8">

          <h1 className="text-white text-6xl md:text-8xl font-black tracking-widest drop-shadow-2xl">
            ARKFIELD
          </h1>


          <p className="mt-5 text-cyan-300 text-xl md:text-2xl font-bold drop-shadow-lg">
            Cluster PvE Cross-Platform
          </p>


          <p className="mt-2 text-white text-lg drop-shadow-lg">
            Ark Survival Ascended
          </p>

        </div>

      </div>

    </section>
  );
}