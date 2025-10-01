import { TriangleDownMini } from '@medusajs/icons';
import Link from 'next/link';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import type { SidebarItemType } from '@/types';

const SidebarItem = ({ href, title, children }: SidebarItemType) => {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        {href ? (
          <Link
            href={href}
            className="text-sm py-2 w-full flex justify-between items-center cursor-pointer group"
            suppressHydrationWarning
          >
            {title}
            {children && <TriangleDownMini className={'group-data-[state=open]:rotate-180'} />}
          </Link>
        ) : (
          <div className="text-sm py-2 w-full flex justify-between items-center cursor-pointer group">
            {title}
            {children && <TriangleDownMini className={'group-data-[state=open]:rotate-180'} />}
          </div>
        )}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {children?.map((child) => (
          <SidebarItem key={child.href} {...child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarItem;
