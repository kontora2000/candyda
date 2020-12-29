export interface Post {
  id: number | null;
  content: string;
  subcontent: string;
  title: string;
  excerpt: string;
  subtitle: string;
  slug: string;
  imageID: number | null;
  galleryID: number | null;
  locationID: number | null;
  tags: Tag[];
  date: string;
  created_at: string;
}

export interface Candidate {
  id: number | null;
  name: string;
  surname: string;
  status: string;
  slug: string;
  partID: number | null;
  votes: number | null;
  avatarID: number | null;
  avatar: string;
  galleryID: number | null;
  gallery: Image[],
  description: string;
  tagID: number | null;
  created_at: string;
  birthdate: string;
}

export interface Tag {
  id: number | null | symbol,
  name: string,
}

export interface PostTag {
  id: number;
  postID: number;
}

export interface Image {
  id: number;
  src: string;
  description: string;
  source: string;
}

export interface PageResponse {
  currentPage: number;
  data: any[],
  'next_page': number;
  'prev_page': number;
  'last_page': number;
}
