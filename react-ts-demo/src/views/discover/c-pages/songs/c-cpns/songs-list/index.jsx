import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsListWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchCategorySongsAction } from '../../store/songs'
import { shallowEqual } from 'react-redux'
import SectionItemV1 from '@/components/section-item-v1'
import { Pagination } from 'antd'
interface IProps {
  children?: ReactNode;
}

const SongsList: FC<IProps> = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const { categorySongs, currentCategory, categorySongsTotal } = useAppSelector(
    (state) => ({
      categorySongs: state.songs.categorySongs,
      currentCategory: state.songs.currentCategory,
      categorySongsTotal: state.songs.categorySongsTotal
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    setPageIndex(1)
    dispatch(
      fetchCategorySongsAction({
        cat: currentCategory,
        limit: 35,
        offset: 0
      })
    )
  }, [currentCategory])

  function handlePaginationChange(page: number) {
    setPageIndex(page)
    dispatch(
      fetchCategorySongsAction({
        cat: currentCategory,
        limit: 35,
        offset: 35 * (page - 1)
      })
    )
  }
  return (
    <SongsListWrapper>
      <div className="songs-list">
        {categorySongs.map((item) => {
          return (
            <div key={item.id} className="songs-item">
              <SectionItemV1 info={item} />
            </div>
          )
        })}
      </div>
      <div className="Pagination">
        <Pagination
          current={pageIndex}
          total={categorySongsTotal}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
    </SongsListWrapper>
  )
}

export default memo(SongsList)
