

export class NewModels {
  status: string;
  totalResults: number;
  articles: Article[];
}

export class Article {
  source: Source;
  author:  string;
  title: string;
  description:  string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export class Source {
  id: string;
  name: string;
}
