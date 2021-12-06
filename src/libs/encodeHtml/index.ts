import { unescape } from "./unescape";

export const encodeHtml = (text?: string) => ({
  __html: unescape(text),
});
