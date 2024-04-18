import Header from '@/components/movies/Header'
import MoviesSlider from '@/components/movies/MoviesSlider'

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tag = searchParams?.tag as string
  return (
    <div>
      <Header />
      <MoviesSlider title="What's Popular" tag={tag} />
    </div>
  )
}
