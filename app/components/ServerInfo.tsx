export default function ServerInfo() {
  return (
    <section className="relative py-20 px-6">

      <div className="absolute inset-0 bg-black/20"></div>


      <div className="relative z-10 max-w-6xl mx-auto">


        <h2 className="text-4xl md:text-5xl text-center font-black tracking-widest text-white mb-12">
          INFORMATIONS SERVEUR
        </h2>



        {/* RATES */}

        <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/40 rounded-3xl p-8 mb-8">


          <h3 className="text-3xl text-cyan-300 font-bold mb-6 text-center">
            ⚡ Stats Serveur ArkField X3 [fr]
          </h3>


          <div className="grid md:grid-cols-2 gap-6 text-lg">


            <div>
              <p>• Exp X3</p>
              <p>• Loot X1,5</p>
              <p>• Pêche X1,5</p>
              <p>• Stack X10</p>
            </div>


            <div>
              <p>• Récolte X3</p>
              <p>• Taming X5</p>
              <p>• Éclosion X50</p>
              <p>• Maturation X50</p>
            </div>


          </div>

        </div>





        <div className="grid md:grid-cols-2 gap-8">



          <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/40 rounded-3xl p-8">

            <h3 className="text-cyan-300 text-2xl font-bold mb-5">
              ⚙️ Fonctionnalités
            </h3>


            <p>• Ramassage structure automatique</p>
            <p>• Cross Ark actif</p>
            <p>• Localisation carte actif</p>
            <p>• Élément transférable</p>


          </div>





          <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/40 rounded-3xl p-8">


            <h3 className="text-cyan-300 text-2xl font-bold mb-5">
              🦖 Personnages & Dinos
            </h3>


            <p>• Stats perso boosté</p>
            <p>• Stats Dino boosté</p>
            <p>• Sauvegarde 15 min</p>
            <p>• Niveau Dino sauvage 150 Max</p>


          </div>



        </div>






        <div className="grid md:grid-cols-2 gap-8 mt-8">



          <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/40 rounded-3xl p-8">


            <h3 className="text-cyan-300 text-2xl font-bold mb-5">
              🏠 Timer Structures
            </h3>


            <p>• Chaume : 16 jours</p>
            <p>• Bois / Argile : 32 jours</p>
            <p>• Pierre : 48 jours</p>
            <p>• Verre : 60 jours</p>
            <p>• Métal : 65 jours</p>
            <p>• Tek : 80 jours</p>


          </div>





          <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/40 rounded-3xl p-8">


            <h3 className="text-cyan-300 text-2xl font-bold mb-5">
              🦖 Timer Dino
            </h3>


            <p>• Dino : 36 jours</p>

            <p className="mt-4">
              • Destruction après 30 jours d'inactivité des base et dinos 
              si aucun avertissement joueur et aucune manifestation de nos prise de contact
            </p>


          </div>



        </div>






        <div className="mt-8 bg-black/30 backdrop-blur-sm border border-cyan-400/40 rounded-3xl p-8 text-center">


          <p className="text-xl">
            • Destroy Dino automatique à 8h et 16h
          </p>


          <p className="text-xl mt-3">
            • Redémarrage serveur à 6h
          </p>


        </div>




      </div>


    </section>
  );
}