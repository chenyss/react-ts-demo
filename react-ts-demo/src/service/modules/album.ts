import hyRequest from '..'

export function getHotAlbums() {
  return hyRequest.get({
    url: '/album/newest'
  })
}

export function getTopAlbums(limit: number, offset: number) {
  return hyRequest.get({
    url: '/album/new',
    params: {
      limit,
      offset
    }
  })
}
