import { vi } from 'vitest'
import '@testing-library/jest-dom'
import React from 'react'

if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = class MockIntersectionObserver {
    constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] { return [] }
    root: Element | Document | null = null
    rootMargin: string = ''
    thresholds: ReadonlyArray<number> = []
  } as unknown as typeof IntersectionObserver
}

vi.mock('next/font/google', () => {
  const makeFont = () => ({
    className: 'mock-font',
    variable: '--mock-font',
    style: { fontFamily: 'Mock' },
  })
  return {
    Syne: makeFont,
    Inter: makeFont,
    Bricolage_Grotesque: makeFont,
    Poppins: makeFont,
  }
})

vi.mock('next/image', () => ({
  __esModule: true,
  default: vi.fn((props) => {
    const { src, alt, priority, jsx, fill, ...rest } = props
    if (fill) {
      rest.width = '100%'
      rest.height = '100%'
    }
    return React.createElement('img', { src, alt, ...rest })
  }),
}))

vi.mock('next/link', () => ({
  __esModule: true,
  default: vi.fn(({ children, href, ...props }) => {
    return React.createElement('a', { href, ...props }, children)
  }),
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))
