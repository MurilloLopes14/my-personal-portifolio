type ButtonProps = {
  href?: string;
  target?: string;
  label?: string;
  icon?: string;
  classes?: string;
};

export const ButtonPrimary = ({
  href,
  target,
  label,
  icon,
  classes,
}: ButtonProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : (
          ""
        )}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : (
          ""
        )}
      </button>
    );
  }
};

export const ButtonOutline = ({
  href,
  target,
  label,
  icon,
  classes,
}: ButtonProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : (
          ""
        )}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : (
          ""
        )}
      </button>
    );
  }
};
