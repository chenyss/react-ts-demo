import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendLeft, RecommendRight, RecommendWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchRecommendDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 发起网络请求
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <RecommendLeft>
        <HotRecommend />
      </RecommendLeft>
      <RecommendRight></RecommendRight>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
