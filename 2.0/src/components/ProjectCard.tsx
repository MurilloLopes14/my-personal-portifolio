type Props = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  classes: string;
};
export const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
}: Props) => {
  return (
    <>
      <div
        className={
          "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
          classes
        }
      >
        <figure className="img-box aspect-square rounded-lg mb-4">
          <img
            src={imgSrc}
            alt={title}
            className="img-cover"
            loading="lazy"
            // width={}
            // height={}
          />
        </figure>

        <div className=" flex items-center justify-between gap-4 ">
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                className="h8
               text-sm t-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg "
                key={key}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>

        <a href={projectLink} target="_blank" className="absolute inset-0"></a>
      </div>
    </>
  );
};