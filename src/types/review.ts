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
export type UserReview = {
  filmId: string;
  rating: number;
  comment: string;
};

export type Reviews = Review[];
