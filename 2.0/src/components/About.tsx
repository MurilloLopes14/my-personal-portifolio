export const About = () => {
  const aboutItems: { label: string; number: number }[] = [
    {
      label: "Projetos concluídos",
      number: 45,
    },
    {
      label: "Anos de experiência",
      number: 4,
    },
  ];

  return (
    <>
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-xl md:p-12">
            <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
              Seja bem-vindo! Me chamo Murillo, um programador profissional com
              uma carreira promissora de experiências adquiridas ao longo de 4
              anos neste vasto mercado de tecnologia. Combinando métodologias
              modernas com uma lógica dinâmica para construir minha expertise!
              Eu transformo a idea no ideal, eu coleto conceitos e os transformo
              em tecnologias que moldam o futuro!
            </p>

            <div className=" flex flex-wrap items-center gap-4 md:gap-7">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-xl font-semibold">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))}

              <img
                src="/images/logo.svg"
                alt="Logo"
                className="ml-auto md:w-[40px] md:h-[40px]"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/*
Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance
*/
