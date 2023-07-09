import React, { Fragment, memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RadioRecommendWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { fetchDjRadioRecommendAction } from '../../store/djradio'
import DjRadioItemV1 from '@/components/djradio-item-v1'

interface IProps {
  children?: ReactNode
}

const RadioRecommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { recommends, currentId } = useAppSelector(
    (state) => ({
      recommends: state.djradio.recommends,
      currentId: state.djradio.currentId
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(fetchDjRadioRecommendAction(currentId))
  }, [currentId])

  return (
    <RadioRecommendWrapper>
      <SectionHeaderV1 title="优秀新电台" />
      <div className="radioRecommend-content">
        {recommends &&
          recommends.map((item, index) => {
            return (
              <div key={index}>
                <DjRadioItemV1 item={item}></DjRadioItemV1>
              </div>
            )
          })}
      </div>
    </RadioRecommendWrapper>
  )
}

export default memo(RadioRecommend)
