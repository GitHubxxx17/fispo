import { createContext, useContext, useState, useMemo } from "react";
import { PageData } from "shared/types";

// 创建上下文
export const DataContext = createContext(
  {} as {
    pageData: PageData;
    setPageData: (data: PageData) => void;
  }
);

// 创建自定义 Hook 来使用上下文
export const usePageData = () => {
  return useContext(DataContext);
};

// 创建提供者组件
export const DataProvider = ({
  value,
  children,
}: {
  value: PageData;
  children: React.ReactNode;
}) => {
  const [pageData, setPageDataState] = useState(value);

  const innerValue = useMemo(() => {
    return {
      pageData,
      setPageData: (data: PageData) => {
        setPageDataState(data);
      },
    };
  }, [pageData]);

  return (
    <DataContext.Provider value={innerValue}>{children}</DataContext.Provider>
  );
};
