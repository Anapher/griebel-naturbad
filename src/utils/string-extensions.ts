export const addWhitespaceAfterChars = (s: string) => {
  let result = "";
  for (const c of s) {
    if (c === " ") result += c + " ‌‌ ‌‌  ";
    else result += c + " ";
  }

  return result.trimEnd();
};
