import User from "./User";
type Comment = {
  user: User;
  itemId: number;
  content: string;
  rating_score: number;
  date: string;
  replies: Comment[];
};
export default Comment;
