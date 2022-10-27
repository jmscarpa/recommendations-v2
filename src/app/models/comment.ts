import { User } from './user';

export interface Comment {
  id: number;
  content: string;
  created_at: Date;
  user: User;
}
