import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Mock next/font/google
vi.mock('next/font/google', () => ({
  Syne: () => ({ className: 'syne', variable: '--font-syne' }),
  Inter: () => ({ className: 'inter', variable: '--font-inter' }),
}));

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt?: string; fill?: boolean; priority?: boolean }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={props.src}
        alt={props.alt || ""}
      />
    );
  },
}));

// Mock IntersectionObserver
class IntersectionObserverMock {
  root = null;
  rootMargin = "";
  thresholds = [];
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
}

window.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;

// Automatically cleanup after each test
afterEach(() => {
  cleanup();
});
