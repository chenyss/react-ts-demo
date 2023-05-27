import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

// import Recommend from '@/views/discover/c-pages/recommend'
// import Ranking from '@/views/discover/c-pages/ranking'
// import Songs from '@/views/discover/c-pages/songs'
// import Djradio from '@/views/discover/c-pages/djradio'
// import Artist from '@/views/discover/c-pages/artist'
// import Album from '@/views/discover/c-pages/album'

const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/c-pages/recommend'))
const Ranking = lazy(() => import('@/views/discover/c-pages/ranking'))
const Songs = lazy(() => import('@/views/discover/c-pages/songs'))
const Djradio = lazy(() => import('@/views/discover/c-pages/djradio'))
const Artist = lazy(() => import('@/views/discover/c-pages/artist'))
const Album = lazy(() => import('@/views/discover/c-pages/album'))

const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
