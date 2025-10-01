export default async function Page({ params }: { params: { locale: string } }) {
  return <div>Hello, {params.locale}!</div>;
}
