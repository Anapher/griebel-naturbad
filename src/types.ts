export type NavigationLink = {
  title: string;
  to: string;
};

export type NavigationLinkGroup = {
  title: string;
  children: NavigationLink[];
};

export function isNavigationLinkGroup(
  data: NavigationLinkGroup | NavigationLink
): data is NavigationLinkGroup {
  return Boolean((data as any).children);
}
