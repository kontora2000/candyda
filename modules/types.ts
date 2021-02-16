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
  post_date: string;
}

export interface Candidate {
  id: number | null;
  name: string;
  surname: string;
  patronymic: string;
  status: string;
  slug: string;
  partID: number;
  votes: number;
  avatarID: number | null;
  avatar: string;
  galleryID: number | null;
  gallery: string;
  description: string;
  tagID: number | null;
  created_at: string;
  birthdate: string;
}

export interface Party {
  id: number | null;
  name: string;
  slug: string;
  logo: string;
  description: string;
  candidates: Candidate[] | null;
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


export interface Distritct {
   id: number;
   slug: string;
   name: string;
   parent: string;
   parties: Party[];
   candidadates: Candidate[];
   posts: Post[];
   tags: Tag[];
}