const mods = [
  {
    name: "Custom Dino Levels",
    desc: "Augmente la qualité des dinosaures sauvages et permet un meilleur équilibrage des niveaux."
  },
  {
    name: "Auto Engrams",
    desc: "Débloque automatiquement les engrammes nécessaires selon votre progression."
  },
  {
    name: "Improved Egg Incubator (Crossplay)",
    desc: "Incubateur amélioré avec options avancées pour l'élevage et la gestion des œufs."
  },
  {
    name: "Ark Coins",
    desc: "Système de monnaie serveur permettant différentes fonctionnalités."
  },
  {
    name: "Easy Transferable Element",
    desc: "Permet un transfert simplifié de l'élément entre les cartes du cluster."
  },
  {
    name: "Klinger Additional Rustic Building",
    desc: "Ajoute des éléments de construction rustiques supplémentaires."
  },
  {
    name: "BigAL's Carcha Rework",
    desc: "Amélioration et modification du Carcharodontosaurus."
  },
  {
    name: "Wall'n Floor Decor",
    desc: "Ajoute des décorations et éléments pour personnaliser vos bases."
  },
  {
    name: "Solo Farm Field",
    desc: "Facilite la gestion des ressources pour les joueurs solo."
  },
  {
    name: "Dino+ (Nanny, Hatchery)",
    desc: "Outils améliorés pour l'élevage, la reproduction et les bébés dinos."
  },
  {
    name: "Spawn Blocker",
    desc: "Contrôle l'apparition de certaines créatures sur la carte."
  },
  {
    name: "Automated Dino Wipes",
    desc: "Gestion automatique des nettoyages dinos du serveur."
  },
  {
    name: "Super Spyglass Plus",
    desc: "Informations détaillées sur les créatures et leurs statistiques."
  },
  {
    name: "Resonant's Shop Mod",
    desc: "Ajoute une boutique avec différents systèmes d'achat."
  },
  {
    name: "Utilities Plus",
    desc: "Ajoute des outils pratiques pour améliorer l'expérience joueur."
  },
  {
    name: "TBS QoL",
    desc: "Améliorations de qualité de vie pour le gameplay."
  },
  {
    name: "Ark Poker",
    desc: "Ajoute un système de poker dans le serveur."
  },
  {
    name: "BigAL's Meraxes",
    desc: "Ajout et amélioration du Meraxes."
  },
  {
    name: "Astraeos - Mythological Creatures",
    desc: "Ajoute des créatures mythologiques."
  },
  {
    name: "More's Indomitable Duo",
    desc: "Ajoute de nouvelles créatures et fonctionnalités."
  },
  {
    name: "ARKology DE - Desolation",
    desc: "Extension ajoutant du contenu et des créatures."
  },
  {
    name: "Awesome ARK Tools",
    desc: "Outils supplémentaires pour joueurs et administrateurs."
  },
  {
    name: "Death Inventory Keeper",
    desc: "Protection et récupération de l'inventaire après une mort."
  },
  {
    name: "BigAL's WAK Spinosaurus",
    desc: "Ajoute une variante améliorée du Spinosaurus."
  },
  {
    name: "Isle of Rhyths Skyshroud Drakes",
    desc: "Ajoute de nouvelles créatures volantes."
  },
  {
    name: "Crafting Skill Potion",
    desc: "Permet de gérer les compétences de fabrication."
  },
  {
    name: "Prefabs: Medieval Town",
    desc: "Ajoute des constructions médiévales préfabriquées."
  },
  {
    name: "Rand's Animal Traps",
    desc: "Ajoute des pièges pour capturer les animaux."
  }
];


export default function ModsAscended() {
  return (
    <section className="py-16 px-6">

      <h2 className="text-center text-4xl font-black text-cyan-300 mb-10">
        MODS ARKFIELD ASCENDED
      </h2>


      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {mods.map((mod) => (
          <div
            key={mod.name}
            className="
            bg-white/10
            backdrop-blur-md
            border
            border-cyan-400/40
            rounded-2xl
            p-6
            text-center
            shadow-xl
            "
          >

            <h3 className="text-xl font-bold text-cyan-200">
              {mod.name}
            </h3>

            <p className="text-white/80 mt-3 text-sm">
              {mod.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}