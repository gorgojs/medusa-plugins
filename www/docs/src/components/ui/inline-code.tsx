'use client';

import { Copy } from '@medusajs/ui';
import type React from 'react';
import { cn } from '@/lib/utils';

export type InlineCodeProps = React.ComponentProps<'code'> & {
  variant?: 'default' | 'grey-bg';
};

export const InlineCode = ({ variant = 'default', ...props }: InlineCodeProps) => {
  return (
    <Copy content={props.children as string} className="text-start inline not-prose">
      <code
        {...props}
        className={cn(
          'not-prose',
          'text-ui-tag-neutral-text border whitespace-break-spaces break-all',
          'font-monospace text-code-label rounded-sm py-0 px-[5px]',
          variant === 'default' && [
            'bg-ui-tag-neutral-bg group-hover:bg-ui-tag-neutral-bg-hover',
            'group-active:bg-ui-bg-subtle-pressed group-focus:bg-ui-bg-subtle-pressed',
            'border-ui-tag-neutral-border',
          ],
          variant === 'grey-bg' && [
            'bg-ui-bg-switch-off group-hover:bg-ui-bg-switch-off-hover',
            'group-active:bg-ui-switch-off-hover group-focus:bg-ui-switch-off-hover',
            'border-ui-border-strong',
          ],
          props.className
        )}
      />
    </Copy>
  );
};
