export function parseSpecificationsText(content: string): [string, string][] {
  return content.split(/\r?\n/).map((x) => {
    const parts = x.split(": ", 2);
    return parts as [string, string];
  });
}
