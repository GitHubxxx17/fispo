import React from "react";
import styles from "./index.module.scss";
import { Categories as CategoriesType } from "shared/types";
import { Link } from "shared/components";

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
              <Link href={`category/${name}`}>{name}</Link>
              <span>{`(${value.length})`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
