export type Project = {
  id: string;
  slug: string;
  title: string;
  year: string | null;
  tag: string | null;
  published: boolean;
  created_at: string;
};
