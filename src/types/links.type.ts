type urlType = {
  name: string
  url: string
}

export type LinkPropsType = urlType & {
  subLinks: urlType[]
}
