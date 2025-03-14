import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface IconProps {
  icon: IconName;
  classNames?: string;
  isSpin?: boolean;
  shake?: boolean;
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
    try {
      import(
        /* @vite-ignore */
        "@fortawesome/free-solid-svg-icons"
      ).then((module) => {
        if (module[iconName]) setIcon(module[iconName]);
      });
      import(
        /* @vite-ignore */
        "@fortawesome/free-brands-svg-icons"
      ).then((module) => {
        if (module[iconName]) setIcon(module[iconName]);
      });
    } catch (e) {
      console.log(e);
    }
  }, [iconName]);

  return (
    icon && (
      <FontAwesomeIcon
        icon={icon}
        className={classNames({
          ["fa-solid fa-spinner fa-spin"]: props.isSpin,
          ["fa-shake"]: props.shake,
        })}
      />
    )
  );
};

export default Icon;
