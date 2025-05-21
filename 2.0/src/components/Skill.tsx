import { useState } from "react";
import { skillItem } from "../mocks/skill";
import { ButtonOutline } from "./Button";
import { SkillCard } from "./SkillCard";

export const Skill = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleItems = showMore ? skillItem : skillItem.slice(0, 4);

  return (
    <>
      <section className="">
        <div className="container">
          <h2 className="headline-2">Ferramentas de trabalho</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Aprenda mais sobre as diversas tecnolgias e conhecimentos que
            utilizo no meu contidiano profissional para criar poderosos,
            consistentes e performáticos sistemas!
          </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] select-none">
            {visibleItems.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes=""
              />
            ))}
          </div>

          <div onClick={() => setShowMore(!showMore)} className=" pt-3">
            <ButtonOutline
              href="#about"
              label={showMore ? "Ver menos" : "Ver mais"}
              icon={showMore ? "arrow_upward" : "arrow_downward"}
              classes=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
