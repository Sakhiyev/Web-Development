import { Category } from './category';
import { Comment } from './comment';

export interface Bear {
    id: number;
    title: string;
    description: string;    
    likes: number;
    price: number;
    comments: string[];   
    category: Category;
}
