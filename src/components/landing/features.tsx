import type { ICardProps } from './interfaces/ICard';
import { FeaturesGrid } from './FeaturesGrid';

const MODULES: ICardProps[] = [
  {
    id: '1',
    title: 'Python Programming for Beginners',
    description:
      'Start your coding journey with Python, the most beginner-friendly language.',
    category: 'TECHNOLOGY',
    imageUrl:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop',
    duration: 360,
    students: 3421,
    rating: 4.9,
    level: 'Beginner',
    learnReward: 60,
    author: 'Alex Kumar',
  },
  {
    id: '2',
    title: 'Entrepreneurship Essentials',
    description: 'Learn how to start and grow your own business.',
    category: 'BUSINESS',
    imageUrl:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
    duration: 420,
    students: 1876,
    rating: 4.6,
    level: 'Intermediate',
    learnReward: 70,
    author: 'Elena Rodriguez',
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Create beautiful and user-friendly digital experiences.',
    category: 'DESIGN',
    imageUrl:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    duration: 300,
    students: 1543,
    rating: 4.8,
    level: 'Intermediate',
    learnReward: 55,
    author: 'Jordan Lee',
  },
  {
    id: '4',
    title: 'Financial Literacy for Emerging Markets',
    description:
      'Build financial independence and manage your wealth effectively.',
    category: 'BUSINESS',
    imageUrl:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop',
    duration: 280,
    students: 2876,
    rating: 4.7,
    level: 'Beginner',
    learnReward: 50,
    author: 'Amara Okonkwo',
  },
];

/* Features section */

export const Features = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* grid */}
        <FeaturesGrid cardProps={MODULES} />
      </div>
    </section>
  );
};

export default Features;
