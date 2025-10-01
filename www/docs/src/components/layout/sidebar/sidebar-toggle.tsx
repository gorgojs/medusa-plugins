'use client';

import { BarsThree } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { useSidebar } from '@/contexts/sidebar-context';
import { cn } from '@/lib/utils';

export function SidebarToggle({ className }: { className?: string }) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="transparent"
      onClick={() => toggleSidebar()}
      className={cn(className, 'cursor-pointer p-0 size-8')}
    >
      <BarsThree />
    </Button>
  );
}
