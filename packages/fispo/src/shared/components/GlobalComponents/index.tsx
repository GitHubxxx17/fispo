import { globalComponents } from "fispo:globalComponents";
import { createPortal } from "react-dom";

const GlobalComponents = () => {
  return (
    <>
      {globalComponents.map((globalComponent) => {
        return createPortal(globalComponent.element, document.body);
      })}
    </>
  );
};

export default GlobalComponents;
