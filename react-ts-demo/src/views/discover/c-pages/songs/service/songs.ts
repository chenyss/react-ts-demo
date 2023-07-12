import hyRequest from '@/service/index'

export function getSongCategory() {
  return hyRequest.get({
    url: '/playlist/catlist'
  })
}

export function getSongCategoryList(cat = '全部', limit = 35, offset = 0) {
  return hyRequest.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset
    }
  })
}
