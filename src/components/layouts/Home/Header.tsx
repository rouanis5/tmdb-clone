import Container from '../Container'
const background = new URL('../../../assets/images/header.jpg', import.meta.url)
  .href
const Header = () => {
  return (
    <Container className="relative z-0">
      {/* start background-image */}
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        src={background}
        alt="revengers cover"
      ></img>
      {/* ------------- */}
      {/* start overlay */}
      <div className="absolute inset-0 -z-10 bg-primary/80"></div>
      {/* ------------- */}
      <div className="space-y-10 py-14">
        <div className=" text-white ">
          <h1 className="text-5xl font-bold">Welcome.</h1>
          <p className="text-3xl font-semibold leading-10">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <form className="relative w-full">
          <input
            type="text"
            className="focus:header-ring w-full rounded-full px-5 py-3 outline-none placeholder:text-gray-500"
            placeholder="Search for a movie, tv show, person......"
            spellCheck="false"
            autoCorrect="false"
            autoComplete="false"
          />
          <input
            type="submit"
            className="focus:header-ring absolute inset-y-0 right-0 rounded-full bg-gradient-to-br from-tertiary to-secondary px-6 font-semibold text-white hover:text-primary"
            value="Search"
          />
        </form>
      </div>
    </Container>
  )
}

export default Header
