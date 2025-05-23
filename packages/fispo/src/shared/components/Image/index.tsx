import { baseUrl } from "@runtime/util";
import React, { forwardRef, useState, useRef, useEffect } from "react";
import { EXTERNAL_URL_RE } from "shared/constants";
import styles from "./index.module.scss";
import classNames from "classnames";
import mediumZoom from "medium-zoom";
import { inBrowser } from "shared/helper";

/**
 * 增强型图片组件，支持懒加载、预览和错误处理
 *
 * @remarks
 * 该组件继承了所有原生img标签的属性，并添加了额外的功能特性
 *
 * @example
 * ```tsx
 * <Image src="/path/to/image.jpg" alt="示例图片" lazy={true} isPreview={true} />
 * ```
 */
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  children?: React.ReactNode;
  /** 是否启用懒加载（默认：true） */
  lazy?: boolean;
  /** 加载中的占位符组件 */
  placeholder?: React.ReactNode;
  /** 加载失败的回退组件 */
  fallback?: React.ReactNode;
  /** 是否支持预览功能（默认：false） */
  isPreview?: boolean;
  /** 交叉观察器选项 */
  intersectionObserverOptions?: {
    /** 交叉观察器根元素 */
    root?: Element | Document | null;
    /** 交叉观察器根边距（默认："100px"） */
    rootMargin?: string;
    /** 交叉观察器阈值（默认：0.1） */
    threshold?: number | number[];
  };
  /**
   * 包裹图片的容器类名
   * 用于应用自定义样式或布局
   */
  wapperClassName?: string;
  /**
   * 包裹图片的容器样式
   */
  wapperStyle?: React.CSSProperties;
}

/**
 * 增强型图片组件
 *
 * @param props - 图片组件属性
 * @param ref - 图片元素引用
 *
 * @returns 渲染的图片组件
 */
const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    src = "/",
    children,
    lazy = true,
    intersectionObserverOptions = {
      threshold: 0.1,
      rootMargin: "100px",
    },
    placeholder = <span className={styles["wave-image"]}></span>,
    fallback = <span>加载失败</span>,
    isPreview = false,
    className = "",
    wapperClassName = "",
    wapperStyle = {},
    ...rest
  } = props;

  // 状态管理
  const [isLoaded, setIsLoaded] = useState(false); // 图片是否已加载
  const [hasError, setHasError] = useState(false); // 图片加载是否出错
  const imgRef = useRef<HTMLImageElement>(null); // 图片元素引用
  const observerRef = useRef<IntersectionObserver | null>(null); // 交叉观察器引用

  // 处理URL：自动添加基础路径（非外部URL时）
  const isExternal = EXTERNAL_URL_RE.test(src);
  const withBaseUrl = isExternal ? src : baseUrl(src);

  /**
   * 初始化交叉观察器，实现图片懒加载功能
   */
  useEffect(() => {
    // 禁用懒加载或浏览器不支持时直接加载图片
    if (!inBrowser() || !lazy || !("IntersectionObserver" in window)) {
      setIsLoaded(true);
      return;
    }

    // 创建交叉观察器实例
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 当图片进入视口时加载图片并停止观察
        if (entry.isIntersecting && imgRef.current && !isLoaded) {
          setIsLoaded(true);
          observerRef.current?.unobserve(imgRef.current);
          if (isPreview) setTimeout(() => mediumZoom(imgRef.current), 300);
        }
      });
    }, intersectionObserverOptions);

    // 开始观察图片元素
    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    // 清理函数：组件卸载时断开观察器连接
    return () => {
      observerRef.current?.disconnect();
    };
  }, [lazy, src, intersectionObserverOptions]);

  /**
   * 处理图片加载成功事件
   * @param e - 合成事件对象
   */
  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(false);
    rest.onLoad?.(e); // 触发原生onLoad事件
  };

  /**
   * 处理图片加载失败事件
   * @param e - 合成事件对象
   */
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    rest.onError?.(e); // 触发原生onError事件
  };

  return (
    <span
      className={classNames(styles["img-wapper"], wapperClassName)}
      style={wapperStyle}
    >
      {/* 实际图片元素 */}
      <img
        ref={ref || imgRef}
        src={lazy && !isLoaded ? "" : withBaseUrl} // 图片加载完成后才设置src属性
        alt={rest.alt || ""}
        className={classNames(className, {
          "preview-img": isPreview, // 预览样式类
          [styles.lazyloading]: lazy && !isLoaded, // 懒加载中样式类
          [styles.lazyloaded]: lazy && isLoaded, // 懒加载完成样式类
        })}
        onLoad={handleLoad}
        onError={handleError}
        {...rest}
      >
        {children}
      </img>

      {/* 加载中占位符 */}
      {lazy && !isLoaded && placeholder}

      {/* 加载失败回退内容 */}
      {isLoaded && hasError && fallback}
    </span>
  );
});

Image.displayName = "Image";

export default Image;
