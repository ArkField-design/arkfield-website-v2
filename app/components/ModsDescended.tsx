const mods = [
  {
    name: "Mods Descended",
    desc: "La liste des mods Ark Survival Evolved sera ajoutée ici."
  }
];


export default function ModsDescended() {

  return (

    <section className="py-16 px-6">

      <h2 className="text-center text-4xl font-black text-cyan-300 mb-10">
        MODS ARKFIELD DESCENDED
      </h2>


      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {mods.map((mod)=>(
          
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
          "
          >

            <h3 className="text-xl font-bold text-cyan-200">
              {mod.name}
            </h3>

            <p className="text-white/80 mt-3">
              {mod.desc}
            </p>


          </div>

        ))}

      </div>


    </section>

  );
}