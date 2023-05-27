import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
  info: any
}

const SectionItemV1: FC<IProps> = (props: IProps) => {
  const { info } = props

  return (
    <ItemV1Wrapper>
      <div className="cover-top">
        <img src={info.picUrl} alt="" />
        <div className="sprite_cover cover ">
          <div className="sprite_cover info">
            <div className="info-left">
              <i className="sprite_icon headset"></i>
              {info.playCount}
            </div>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
    </ItemV1Wrapper>
  )
}

export default memo(SectionItemV1)
