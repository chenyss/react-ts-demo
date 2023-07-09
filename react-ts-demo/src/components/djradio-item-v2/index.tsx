import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { DjRadioItemV2Wrapper } from './style'
import { UserOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
  item: any
}

const DjRadioItemV2: FC<IProps> = (props: IProps) => {
  const { item } = props
  return (
    <DjRadioItemV2Wrapper>
      <img src={item.picUrl} alt="" className="img" />
      <div className="info">
        <div className="title">{item.name}</div>
        <div className="nickname">
          <UserOutlined />
          {item.dj.nickname}
        </div>
        <div className="count">
          共{item.programCount}期 共{item.subCount}人订阅
        </div>
      </div>
    </DjRadioItemV2Wrapper>
  )
}

export default memo(DjRadioItemV2)
