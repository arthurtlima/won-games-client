export const getImageUrl = (url: string | undefined) => {
  if (!url) {
    return ''
  }

  if (process.env.NEXT_PUBLIC_IMAGE_HOST) {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  }

  return url
}
