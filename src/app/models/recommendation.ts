import { Category } from "./category";
import { Comment } from './comment'

export interface Recommendation {
  id: number;
  category: Category;
  name: string;
  image_url: string;
  description?: string;
  comments: Comment[]
}
