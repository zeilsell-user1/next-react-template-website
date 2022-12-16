export type MenuItem = {
  title: string;
  url: string;
  enabled: boolean;
  topLevel: boolean;
  icon: string;
  subMenuItems: MenuItem[];
};
