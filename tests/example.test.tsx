import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { describe, it, expect } from 'vitest';

describe('Home Page', () => {
    it('renders the hero title', () => {
        render(<Home />);
        expect(screen.getByText('Build Your Skills & Earn.')).toBeInTheDocument();
    });

    it('checks if environment variables are loaded', () => {
        expect(process.env.APP_ENV).toBe('test');
    });
});
