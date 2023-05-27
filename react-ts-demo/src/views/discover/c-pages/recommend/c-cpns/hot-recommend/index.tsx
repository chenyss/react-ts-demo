import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import SectionHeaderV1 from '@/components/section-header-v1/index'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']
  return (
    <div>
      <SectionHeaderV1
        title="热门推荐"
        keywords={keywords}
        morePath="/discover/songs"
      />
    </div>
  )
}

export default memo(HotRecommend)
