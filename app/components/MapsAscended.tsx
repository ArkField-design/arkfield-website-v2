const maps = [
  {
    name: "The Island",
    desc: "La carte originale d'Ark, idéale pour commencer votre aventure."
  },
  {
    name: "Scorched Earth",
    desc: "Survivez dans un environnement désertique avec de nouveaux défis."
  },
  {
    name: "The Center",
    desc: "Une immense carte avec océans, grottes et paysages variés."
  },
  {
    name: "Aberration",
    desc: "Explorez un monde souterrain dangereux rempli de créatures uniques."
  },
  {
    name: "Extinction",
    desc: "Découvrez la Terre ravagée et affrontez les Titans."
  },
  {
    name: "Ragnarok",
    desc: "Une carte gigantesque mêlant plusieurs biomes emblématiques d'Ark."
  },
  {
    name: "Valguero",
    desc: "Une carte riche en biomes, falaises, grottes et créatures."
  },
  {
    name: "Astraeos",
    desc: "Explorez un univers inspiré de la mythologie avec des paysages uniques."
  },
  {
    name: "Lost Colony",
    desc: "Partez à la découverte d'une colonie oubliée remplie de mystères."
  },
  {
    name: "Genesis Part 1",
    desc: "Une simulation proposant plusieurs biomes et des missions inédites."
  },
  {
    name: "🗺️ Plus de cartes à venir...",
    desc: "De nouvelles cartes rejoindront prochainement le cluster ArkField. Restez connectés !"
  }
];

export default function MapsAscended() {
  return (
    <section className="py-16 px-6">

      <h2 className="text-center text-4xl md:text-5xl font-black text-cyan-300 mb-12 tracking-widest">
        MAPS DU CLUSTER ASCENDED
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {maps.map((map) => (
          <div
            key={map.name}
            className="
              bg-white/10
              backdrop-blur-md
              border
              border-cyan-400/40
              rounded-2xl
              p-6
              text-center
              shadow-xl
              hover:bg-white/20
              hover:border-cyan-300
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-cyan-200">
              {map.name}
            </h3>

            <p className="mt-4 text-white/80 leading-relaxed">
              {map.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}