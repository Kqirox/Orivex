export interface ICardProps {
  id: string;
  title: string;
  description: string;
  category: 'TECHNOLOGY' | 'BUSINESS' | 'DESIGN' | 'SCIENCE' | 'FINANCE';
  imageUrl: string;
  duration: number;
  students: number;
  rating: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  learnReward: number;
  author: string;
  size?: number;
}
