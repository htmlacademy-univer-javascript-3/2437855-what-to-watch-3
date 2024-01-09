export type Review = {
  id: number;
  comment: string;
  user: {
    id: number;
    name: string;
  };
  date: string;
  rating: number;
  filmId?: number;
};


