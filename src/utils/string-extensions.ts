export const addWhitespaceAfterChars = (s: string) => {
  let result = "";
  for (const c of s) {
    if (c === " ") result += c + " ‌‌ ‌‌  ";
    else result += c + " ";
  }

  return result.trimEnd();
};

/**
 * The content must have the form: "key: value[newline]"
 */
export function parseKeyValueTextContent(content: string): [string, string][] {
  return content.split(/\r?\n/).map((x) => {
    const parts = x.split(":", 2);
    return parts.map((x) => x.trim()) as [string, string];
  });
}
