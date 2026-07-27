import ModsDescended from "../components/ModsDescended";

export default function DescendedPage() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* BANNIÈRE */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-[url('/images/descended.webp')] bg-cover bg-center opacity-40"></div>

        <div className="relative z-10">

          <h1 className="text-5xl md:text-7xl font-black tracking-widest">
            ARK DESCENDED
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
            Bienvenue sur ArkField Descended
          </h2>

          <p className="text-xl text-white/90 leading-relaxed">
            ArkField Descended est un cluster PvE Cross-Platform dédié à
            Ark Survival Ascended.

            <br /><br />

            Profitez d'une expérience différente d'Ascended avec ses propres
            cartes, ses réglages et ses mods, tout en conservant la qualité et
            la stabilité des serveurs ArkField.
          </p>

        </div>

      </section>

      {/* INFORMATIONS SERVEUR */}

      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto rounded-3xl bg-white/10 backdrop-blur-md border border-cyan-400/30 p-10 text-center">

          <h2 className="text-4xl font-black text-cyan-300 mb-6">
            Informations Serveur
          </h2>

          <p className="text-white/80">
            Les informations du cluster Descended seront ajoutées ici.
          </p>

        </div>

      </section>

      {/* MODS */}

      <ModsDescended />

    </main>
  );
}