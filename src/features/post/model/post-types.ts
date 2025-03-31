export type PostType = {
  id: string;
  title: string;
  slug: string;
  content: (
    | ParagraphContentType
    | OrderedListContentType
    | UnorderedListContentType
    | VideoContentType
    | CodeBlockContentType
    | ImageContentType
    | BlockquoteContentType
    | TableContentType
    | DividerContentType
  )[];
  createdAt: string;
  updatedAt: string;
};

export type PostContentType =
  | ParagraphContentType
  | OrderedListContentType
  | UnorderedListContentType
  | VideoContentType
  | CodeBlockContentType
  | ImageContentType
  | BlockquoteContentType
  | TableContentType
  | DividerContentType;

type BaseContentType = {
  id: string;
  type: string;
};

export type ParagraphContentType = BaseContentType & {
  type: "paragraph";
  content: string;
};

export type OrderedListContentType = BaseContentType & {
  type: "orderedList";
  items: Array<{
    id: string;
    content: string;
  }>;
};

export type UnorderedListContentType = BaseContentType & {
  type: "unorderedList";
  items: Array<{
    id: string;
    content: string;
  }>;
};

export type VideoContentType = BaseContentType & {
  type: "video";
  url: string;
  title?: string;
  description?: string;
  thumbnail?: string;
};

export type CodeBlockContentType = BaseContentType & {
  type: "codeBlock";
  code: string;
  language: string;
  fileName?: string;
  lineNumbers?: boolean;
};

export type ImageContentType = BaseContentType & {
  type: "image";
  url: string;
  alt: string;
  caption?: string;
};

export type BlockquoteContentType = BaseContentType & {
  type: "blockquote";
  content: string;
  author?: string;
  source?: string;
};

export type TableContentType = BaseContentType & {
  type: "table";
  headers: string[];
  rows: string[][];
};

export type DividerContentType = BaseContentType & {
  type: "divider";
};

export type PostPreviewType = Pick<
  PostType,
  "id" | "title" | "createdAt" | "slug"
> & {
  path: string;
};
