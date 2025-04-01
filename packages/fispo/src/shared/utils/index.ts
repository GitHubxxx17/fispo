import { EXTERNAL_URL_RE } from "shared/constants";

export const queryRE = /\?.*$/s;
export const hashRE = /#.*$/s;

export const cleanUrl = (url: string): string =>
  url.replace(hashRE, "").replace(queryRE, "");

export const inBrowser = () => typeof window !== "undefined";

export function addLeadingSlash(url: string) {
  return url.charAt(0) === "/" || EXTERNAL_URL_RE.test(url) ? url : "/" + url;
}

export function removeTrailingSlash(url: string) {
  return url.charAt(url.length - 1) === "/" ? url.slice(0, -1) : url;
}

export function normalizeSlash(url: string) {
  return removeTrailingSlash(addLeadingSlash(url));
}

export function withBase(url: string, base: string) {
  if (EXTERNAL_URL_RE.test(url)) {
    return url;
  }
  const normalizedBase = normalizeSlash(base);
  const normalizedUrl = addLeadingSlash(url);
  return normalizedBase ? `${normalizedBase}${normalizedUrl}` : normalizedUrl;
}

export function removeBase(url: string, base: string): string {
  const normalizedBase = normalizeSlash(base);
  return url.replace(normalizedBase, "");
}

export function isRelativePath(path: string) {
  return path.startsWith("./") || path.startsWith("../");
}

export function isHashPath(path: string) {
  return path.startsWith("#");
}
