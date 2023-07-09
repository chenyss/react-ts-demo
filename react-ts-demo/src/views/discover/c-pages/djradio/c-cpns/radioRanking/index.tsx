import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { RadioRankingWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { fetchDjRadioRankingAction } from '../../store/djradio'
import DjRadioItemV2 from '@/components/djradio-item-v2'
import SectionHeaderV1 from '@/components/section-header-v1'
import { Pagination } from 'antd'

interface IProps {
  children?: ReactNode
}

const DjradioRanking: FC<IProps> = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const limit = 16
  const dispatch = useAppDispatch()
  const { radios, currentId, radiosTotal } = useAppSelector(
    (state) => ({
      radios: state.djradio.radios,
      currentId: state.djradio.currentId,
      radiosTotal: state.djradio.radiosTotal
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(
      fetchDjRadioRankingAction({
        cateId: currentId,
        limit,
        offset: limit * (pageIndex - 1)
      })
    )
  }, [currentId, limit, pageIndex])
  function handlePaginationChange(page: number) {
    setPageIndex(page)
    dispatch(
      fetchDjRadioRankingAction({
        cateId: currentId,
        limit,
        offset: limit * (page - 1)
      })
    )
  }
  return (
    <RadioRankingWrapper>
      <SectionHeaderV1 title="电台排行榜" />
      <div className="radioRanking-content">
        {radios &&
          radios.map((item, index) => {
            return (
              <div key={index} className="radioRanking-item">
                <DjRadioItemV2 item={item}></DjRadioItemV2>
              </div>
            )
          })}
      </div>
      <div className="Pagination">
        <Pagination
          current={pageIndex}
          total={radiosTotal}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
    </RadioRankingWrapper>
  )
}

export default memo(DjradioRanking)
