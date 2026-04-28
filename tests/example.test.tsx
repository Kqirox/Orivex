import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { describe, it, expect } from 'vitest';

describe('Home Page', () => {
    it('renders the landing page correctly', () => {
        render(<Home />);
        expect(screen.getByText(/Build Your Skills & Earn/i)).toBeInTheDocument();
        expect(screen.getByText(/Master Stellar/i)).toBeInTheDocument();
    });

    it('checks if environment variables are loaded', () => {
        expect(process.env.APP_ENV).toBe('test');
    });
});
