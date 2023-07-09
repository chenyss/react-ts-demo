import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { DjRadioItemV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
  item: any
}

const DjRadioItemV1: FC<IProps> = (props: IProps) => {
  const { item } = props
  return (
    <DjRadioItemV1Wrapper>
      <img src={item.picUrl} alt="" className="img" />
      <div className="title">{item.name}</div>
      <div className="rcmdtext">{item.rcmdtext}</div>
    </DjRadioItemV1Wrapper>
  )
}

export default memo(DjRadioItemV1)
