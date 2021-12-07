type key = "&amp;" | "&lt;" | "&gt;" | "&quot;" | "&#39;";

const htmlUnescapes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
} as const;

const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;

const reHasEscapedHtml = RegExp(reEscapedHtml.source);

export const unescape = (string?: string) =>
  string && reHasEscapedHtml.test(string)
    ? string.replace(
        reEscapedHtml,
        (entity) => htmlUnescapes[entity as key] || "'"
      )
    : string || "";
