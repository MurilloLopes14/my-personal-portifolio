import calcDayInterval from "../functions/calcDayInterval";

type Props = {};

export const Career = ({}: Props) => {
  const timeWorked = calcDayInterval("2023-04-12");
  return (
    <>
      <section id="career" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8">Atual status de trabalho</h2>
          <div className="bg-zinc-800/50 p-7 rounded-xl md:p-12">
            <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
              Atualmente trabalho como analista de sistemas e desenvolvedor em
              uma empresa da área de saúde de grande porte, uma ditribuidora
              líder no mercado artigos para laboratório, CRAL! Com uma carreira
              de {timeWorked} neste ramo de desenvolvimento, sinto-me grato pela
              posição em que estou e disponível para dialogar sobre tecnologia e
              oportunidades de estudo para o futuro da minha carreira!
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              <a
                href="https://www.cralplast.com.br"
                title="Cral Artigos para Laboratório LTDA"
                target="_blank"
              >
                <img
                  src="/images/company.png"
                  alt="Company"
                  className="ml-auto md:w-[280px] md:h-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
