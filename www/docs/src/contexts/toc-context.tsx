'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TOCContextType {
  isTocOpen: boolean;
  setIsTocOpen: (isOpen: boolean) => void;
  toggleToc: () => void;
  tocItems: TOCItem[];
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

const TOCContext = createContext<TOCContextType | undefined>(undefined);

export function TOCProvider({ children }: { children: ReactNode }) {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleToc = () => {
    setIsTocOpen((prev) => !prev);
  };

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const intersecting = entries.filter((e) => e.isIntersecting);
    if (intersecting.length > 0) {
      setActiveId(intersecting[intersecting.length - 1].target.id);
    }
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(observerCallback, {
      rootMargin: '0px 0px -80% 0px',
    });

    const prose = document.querySelector('.prose');
    if (!prose) return;

    const headings = Array.from(prose.querySelectorAll<HTMLHeadingElement>('h2, h3')).filter(
      (h) => h.id
    );

    setTocItems(
      headings.map((h) => ({
        id: h.id,
        text: h.textContent ?? '',
        level: Number(h.tagName.charAt(1)),
      }))
    );

    headings.forEach((h) => {
      observerRef.current?.observe(h);
    });
    return () => observerRef.current?.disconnect();
  }, [pathname, searchParams, observerCallback]);

  return (
    <TOCContext.Provider
      value={{
        isTocOpen,
        setIsTocOpen,
        toggleToc,
        tocItems,
        activeId,
        setActiveId,
      }}
    >
      {children}
    </TOCContext.Provider>
  );
}

export function useTOC() {
  const context = useContext(TOCContext);
  if (context === undefined) {
    throw new Error('useTOC must be used within a TOCProvider');
  }
  return context;
}
