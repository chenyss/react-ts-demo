import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import SectionHeaderV1 from '@/components/section-header-v1/index'
import { useAppSelector } from '@/store'
import { RecommendWrapper } from './style'
import SectionItemV1 from '@/components/section-item-v1'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
  const { hotRecommends } = useAppSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends
  }))
  return (
    <RecommendWrapper>
      <SectionHeaderV1
        title="热门推荐"
        keywords={keywords}
        morePath="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.slice(0, 8).map((item) => {
          return <SectionItemV1 info={item} key={item.id} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
