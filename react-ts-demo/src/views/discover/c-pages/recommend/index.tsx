import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  RecommendLeft,
  RecommendRight,
  RecommendSection,
  RecommendWrapper
} from './style'
import { useAppDispatch } from '@/store'
import { fetchRecommendDataAction, fetchSettleSinger } from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起网络请求
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchSettleSinger())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </RecommendSection>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
