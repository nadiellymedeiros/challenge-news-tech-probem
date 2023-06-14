export interface NewsListResultAPI {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface NewsListAPI {
  status: string;
  totalResults: number;
  articles: NewsListResultAPI[];
}
