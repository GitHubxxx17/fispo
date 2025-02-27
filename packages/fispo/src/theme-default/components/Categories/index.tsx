import React from "react";
import styles from "./index.module.scss";
import { Categories as CategoriesType } from "shared/types";

interface CategoriesProps {
  categories?: CategoriesType;
  children?: React.ReactNode;
}

function Categories(props: CategoriesProps) {
  const { categories } = props;
  return (
    <div className={styles.category}>
      <ul>
        {Object.entries(categories).map(([name, value], index) => {
          return (
            <li key={`${name}-${index}`}>
              <a href={`category/${name}`}>{name}</a>
              <span>{`(${value.length})`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
