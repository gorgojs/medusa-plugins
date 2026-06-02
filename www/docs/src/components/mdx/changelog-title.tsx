import type React from 'react';

type ChangelogTitleProps = {
  pkg: string;
  children: React.ReactNode;
};

export function ChangelogTitle({ pkg, children }: ChangelogTitleProps) {
  return (
    <h1 className="flex flex-col gap-2 w-fit text-4xl font-medium tracking-tight mt-5 mb-3 text-ui-fg-base scroll-m-28 lg:scroll-m-24">
      {children}
      <span
        className="font-monospace font-normal text-ui-tag-neutral-text bg-ui-tag-neutral-bg border border-ui-tag-neutral-border rounded-xl px-1 py-1"
        style={{ fontSize: 'inherit', lineHeight: 'inherit' }}
      >{pkg}</span>
    </h1>
  );
}
