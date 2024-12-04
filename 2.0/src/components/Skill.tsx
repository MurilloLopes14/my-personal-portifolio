import { SkillCard } from "./SkillCard";

export const Skill = () => {
  const skillItem: { imgSrc: string; label: string; desc: string }[] = [
    {
      imgSrc: "/languages/chatgpt.svg",
      label: "ChatGPT",
      desc: "IA de desenvolvimento e suporte",
    },
    {
      imgSrc: "/languages/css3.svg",
      label: "CSS",
      desc: "Linguagem Front-End",
    },
    {
      imgSrc: "/languages/docker.svg",
      label: "Docker",
      desc: "Gerenciador de conteineres",
    },
    {
      imgSrc: "/languages/electron.svg",
      label: "ElectronJS",
      desc: "Framework node Desktop",
    },
    {
      imgSrc: "/languages/expo.svg",
      label: "Expo CLI",
      desc: "Framework Mobile",
    },
    {
      imgSrc: "/languages/expressjs.svg",
      label: "Express",
      desc: "Framework node",
    },
    {
      imgSrc: "/languages/git.svg",
      label: "Git",
      desc: "Manutenção de repositórios",
    },
    {
      imgSrc: "/languages/html.svg",
      label: "HTML",
      desc: "Linguagem de Marcação",
    },
    {
      imgSrc: "/languages/insomnia.svg",
      label: "Insomnia",
      desc: "Testes de rota e segurança Back-End",
    },
    {
      imgSrc: "/languages/javascript.svg",
      label: "JavaScript",
      desc: "Linguagem de interação",
    },
    {
      imgSrc: "/languages/json.svg",
      label: "JSON",
      desc: "Leitura de dados",
    },
    {
      imgSrc: "/languages/mongodb.svg",
      label: "MongoDB",
      desc: "Banco de Dados",
    },
    {
      imgSrc: "/languages/mysql.svg",
      label: "MySQL",
      desc: "Linguagem de banco de Dados",
    },
    {
      imgSrc: "/languages/nestjs.svg",
      label: "NestJS",
      desc: "Framework Back-End",
    },
    {
      imgSrc: "/languages/nodejs.svg",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: "/languages/npm.svg",
      label: "NPM",
      desc: "Ferramenta de manutenção de pacotes",
    },
    {
      imgSrc: "/languages/php.svg",
      label: "PHP",
      desc: "Linguagem de interação",
    },
    {
      imgSrc: "/languages/postgresql.svg",
      label: "PostgreSQL",
      desc: "Banco de Dados",
    },
    {
      imgSrc: "/languages/powershell.svg",
      label: "PowerShell",
      desc: "Ferramenta de manutenção de SO",
    },
    {
      imgSrc: "/languages/python.svg",
      label: "Python",
      desc: "Linguagem Back-End para dados",
    },
    {
      imgSrc: "/languages/react.svg",
      label: "ReactJS",
      desc: "Framework node para Front-End",
    },
    {
      imgSrc: "/languages/sass.svg",
      label: "SASS",
      desc: "Pré-processador de CSS",
    },
    {
      imgSrc: "/languages/senior.svg",
      label: "Senior Sistemas",
      desc: "3º maior sistema de Gestão do Brasil",
    },
    {
      imgSrc: "/languages/sql.svg",
      label: "SQL",
      desc: "Linguagem de banco de Dados",
    },
    {
      imgSrc: "/languages/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "Pós-processador de CSS",
    },
    {
      imgSrc: "/languages/typescript.svg",
      label: "TypeScript",
      desc: "Superset JavaScript",
    },
    {
      imgSrc: "/languages/ubuntu.svg",
      label: "Ubuntu",
      desc: "Dist de Linux SO",
    },
    {
      imgSrc: "/languages/vscode.svg",
      label: "Visual Studio Code",
      desc: "IDE de desenvolvimento",
    },
    {
      imgSrc: "/languages/windows.svg",
      label: "Windows",
      desc: "Sistema Operacional Microsoft",
    },
  ];

  return (
    <>
      <section className="">
        <div className="container">
          <h2 className="headline-2">Ferramentas de trabalho</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Aprenda mais sobre as diversas tecnolgias que utilizo no meu
            contidiano profissional para criar poderosos, consistentes e
            performáticos sistemas!
          </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] select-none">
            {skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes=""
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
