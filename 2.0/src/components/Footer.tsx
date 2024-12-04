import { ButtonPrimary } from "./Button";

type Props = {};
export const Footer = ({}: Props) => {
  const sitemap: { label: string; href: string }[] = [
    {
      label: "Início",
      href: "#home",
    },
    {
      label: "Sobre mim",
      href: "#about",
    },
    {
      label: "Trabalhos",
      href: "#work",
    },
    {
      label: "Carreira",
      href: "#reviews",
    },
    {
      label: "Contato",
      href: "#contact",
    },
  ];

  const socials: { label: string; href: string }[] = [
    {
      label: "GitHub",
      href: "https://github.com/MurilloLopes14",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/murillo-lopes-b87912228/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/lilo_mx_/",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch] ">
                Vamos conhecer o mundo juntos!
              </h2>
              <ButtonPrimary
                href="mailto:murillo.oliveira@outlook.com"
                label="Iniciar conversa"
                icon="chevron_right"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">
              <div>
                <p className="mb-2">Mapa do site</p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2">Sociais</p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-10 mb-8">
            <a href="">
              <img
                src="/images/logo.svg"
                alt="logo"
                className=""
                width={40}
                height={40}
              />
            </a>

            <p className="text-zinc-500 text-sm">
              &copy; 2024 <span className="text-zinc-200">Murillo Lopes</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
