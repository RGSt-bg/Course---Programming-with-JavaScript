import { Theme } from './theme';
import { User } from './user';

export interface Post {
  _id: string;
  likes: string[];
  text: string;
  userId: User;
  themeId: Theme;
  created_at: string;
  updatedAt: string;
  __v: number;
}
