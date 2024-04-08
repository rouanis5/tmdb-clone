import Header from '../components/layouts/Home/Header'
import MoviesSlider from '../components/layouts/Home/MoviesSlider'

export default function page() {
  return (
    <div>
      <Header />
      <MoviesSlider title="What's Popular" />
    </div>
  )
}
