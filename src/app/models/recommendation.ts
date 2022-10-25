import { Category } from "src/app/models/category";

export interface Recommendation {
  id: number;
  category: Category;
  name: string;
  image_url: string;
  description?: string;
}
