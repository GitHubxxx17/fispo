import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import classNames from "classnames";
interface IconProps extends FontAwesomeIconProps {
  icon: IconProp;
  className?: string;
  isSpin?: boolean;
  shake?: boolean;
}

const Icon = (props: IconProps) => {
  const { icon, isSpin, shake, className, ...rest } = props;

  return (
    <FontAwesomeIcon
      icon={icon}
      className={classNames(className, {
        ["fa-solid fa-spinner fa-spin"]: isSpin,
        ["fa-shake"]: shake,
      })}
      {...rest}
    />
  );
};

export default Icon;
