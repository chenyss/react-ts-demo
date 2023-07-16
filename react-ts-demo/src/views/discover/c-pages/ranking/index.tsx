import { useAppDispatch, useAppSelector } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchHotRinkingAction, fetchTopRinkingAction } from './store/ranking'
import { RankingLeft, RankingRight, RankingWrapper } from './style'
import TopRinking from './c-cpns/topRinking'
import RinkingHeader from './c-cpns/rankingHeader'
import RinkingList from './c-cpns/rankingList'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { currentIndex, topList } = useAppSelector(
    (state) => ({
      currentIndex: state.rinking.currentIndex,
      topList: state.rinking.topList
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(fetchHotRinkingAction())
  }, [])
  useEffect(() => {
    if (topList.length) {
      dispatch(fetchTopRinkingAction(topList[currentIndex].id))
    }
  }, [currentIndex])
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRinking></TopRinking>
      </RankingLeft>
      <RankingRight>
        <RinkingHeader></RinkingHeader>
        <RinkingList></RinkingList>
      </RankingRight>
    </RankingWrapper>
  )
}

export default memo(Ranking)
