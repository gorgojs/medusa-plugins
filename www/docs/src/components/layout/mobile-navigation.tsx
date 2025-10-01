'use client';

import { BarsThree, XMark } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from '@/i18n/navigation';
import { sidebars } from '@/lib/sidebar';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';
import { LocaleSwitcher } from '../locale-switcher';

export default function MobileNavigation() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDir('down');
      } else {
        setScrollDir('up');
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        animate={{ y: scrollDir === 'down' ? 100 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed left-1/2 -translate-x-1/2 bottom-10 z-[100]"
      >
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          size="xlarge"
          variant="primary"
          className={cn(
            'pointer-events-auto rounded-full sm:hidden cursor-pointer bg-ui-button-inverted backdrop-blur supports-[backdrop-filter]:bg-ui-button-inverted/60 shadow-buttons-neutral'
          )}
        >
          {isOpen ? (
            <>
              <XMark />
              {t('close')}
            </>
          ) : (
            <>
              <BarsThree />
              {t('menu')}
            </>
          )}
        </Button>
      </motion.div>
      <Dialog open={isOpen}>
        <DialogContent
          className="[&>div]:border-b-0 [&>div]:border-t-0 h-screen w-screen max-w-screen rounded-[0] p-10 flex flex-col"
          showCloseButton={false}
        >
          <DialogHeader className="!border-b-0 text-start flex-row justify-between items-center h-8">
            <DialogTitle className="text-ui-fg-subtle">{t('menu')}</DialogTitle>
            <div className="flex gap-2">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </DialogHeader>
          <div className="flex-1 h-full flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-start gap-4">
                {sidebars.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle({
                        className: 'text-2xl px-0 text-ui-fg-base',
                      })}
                    >
                      <Link href={link.href} onClick={() => setIsOpen(false)}>
                        {link.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <DialogFooter className="h-8" />
        </DialogContent>
      </Dialog>
    </>
  );
}
