import ServerInfo from "../components/ServerInfo";
import MapsAscended from "../components/MapsAscended";
import ModsAscended from "../components/ModsAscended";

export default function AscendedPage() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* BANNIÈRE */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-[url('/images/ascended.webp')] bg-cover bg-center opacity-40"></div>

        <div className="relative z-10">

          <h1 className="text-5xl md:text-7xl font-black tracking-widest">
            ARK ASCENDED
          </h1>

          <p className="mt-6 text-cyan-300 text-2xl font-bold">
            Cluster PvE Cross-Platform
          </p>

          <p className="mt-3 text-white/80 text-lg">
            Serveur Ark Survival Ascended
          </p>

        </div>

      </section>

      {/* PRÉSENTATION */}

      <section className="py-16 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-black text-cyan-300 mb-8">
            Bienvenue sur ArkField Ascended
          </h2>

          <p className="text-xl text-white/90 leading-relaxed">
            ArkField propose une expérience PvE Cross-Platform optimisée pour
            Ark Survival Ascended.

            <br />
            <br />

            Profitez d'un cluster équilibré, d'une communauté active et d'une
            expérience pensée pour durer.
          </p>

        </div>

      </section>

      {/* INFORMATIONS SERVEUR */}

      <ServerInfo />

      {/* MAPS DU CLUSTER */}

      <MapsAscended />

      {/* MODS */}

      <ModsAscended />

    </main>
  );
}