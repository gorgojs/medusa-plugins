export type PageProps = {
  children: React.ReactNode
}

export const SingleColumnPage = ({ children }: PageProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      {children}
    </div>
  )
}
