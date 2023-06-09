import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemV1Wrapper } from './style'
import { tranNumber } from '@/utils/format-number'

interface IProps {
  children?: ReactNode
  info: any
}

const SectionItemV1: FC<IProps> = (props: IProps) => {
  const { info } = props

  return (
    <ItemV1Wrapper>
      <div className="cover-top">
        <img src={info.picUrl ? info.picUrl : info.coverImgUrl} alt="" />
        <div className="sprite_cover cover ">
          <div className="sprite_cover info">
            <div className="info-left">
              <i className="sprite_icon headset"></i>
              {tranNumber(info.playCount as number, 2)}
            </div>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap name">{info.name}</div>
    </ItemV1Wrapper>
  )
}

export default memo(SectionItemV1)
