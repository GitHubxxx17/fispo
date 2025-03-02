import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface IconProps {
  icon: IconName;
  classNames?: string;
  isSpin?: boolean;
}

function toCamelCase(str: string) {
  const parts = str.split("-");
  return (
    "fa" +
    parts
      .map((part) => {
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join("")
  );
}

const Icon = (props: IconProps) => {
  const iconName = toCamelCase(props.icon || "spinner");
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    import(
      /* @vite-ignore */
      `@fortawesome/free-solid-svg-icons`
    ).then((module) => {
      setIcon(module[iconName]);
    });
  }, [iconName]);

  return (
    icon && (
      <FontAwesomeIcon
        icon={icon}
        className={props.isSpin ? "fa-solid fa-spinner fa-spin" : ""}
      />
    )
  );
};

export default Icon;
