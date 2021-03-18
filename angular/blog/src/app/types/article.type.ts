export interface ARTICLE_TYPE {
  _id: string;
  title: string;
  content: string;
  publisher: {
    id: string;
    name: string
  };
  createdAt: string
}

export const defaultArticle = {
  _id: '',
  title: '',
  content: '',
  publisher: {
    id: '',
    name: '',
  },
  createdAt: '',
}
