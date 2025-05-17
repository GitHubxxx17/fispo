import { IconName } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import /*#__PURE__*/ * as solidIcons from "@fortawesome/free-solid-svg-icons";
import /*#__PURE__*/ * as brandsIcons from "@fortawesome/free-brands-svg-icons";

// 图标库映射表
const iconLibraries = {
  ...solidIcons,
  ...brandsIcons,
};

interface IconProps extends FontAwesomeIconProps {
  icon: IconName;
  className?: string;
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
  const { icon: customIcon, isSpin, shake, className, ...rest } = props;
  const iconName = toCamelCase(customIcon || "spinner");

  return (
    <FontAwesomeIcon
      icon={iconLibraries[iconName]}
      className={classNames(className, {
        ["fa-solid fa-spinner fa-spin"]: isSpin,
        ["fa-shake"]: shake,
      })}
      {...rest}
    />
  );
};

export default Icon;
