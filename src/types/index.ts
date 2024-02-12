// theme
export type ColorTheme = "dark" | "light";

// notion
export type TPostStatus = "Private" | "Public";

export type TPost = {
  id: string;
  date: { start_date: string };
  slug: string;
  tags?: string[];
  category?: string[];
  summary?: string;
  title: string;
  status: TPostStatus[];
  createdTime: string;
  fullWidth: boolean;
  thumbnail?: string;
};

export type TPosts = TPost[];

export type TTags = {
  [tagName: string]: number;
};

export type TCategories = {
  [category: string]: number;
};

export type NotionSelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

export type PostTag = {
  id: string;
  name: string;
  color: NotionSelectColor;
};

export type PostView = {
  id: string;
  createdAt: string;
  title: string;
  cover: string;
  tags: Array<PostTag>;
};
