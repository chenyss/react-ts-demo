import AlbumItemV1 from '@/components/album-item-v1'
import { useAppDispatch, useAppSelector } from '@/store'
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { TopAlbumWrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { Pagination } from 'antd'
import { fetchTopAlbumsAction } from '../../store/album'

interface IProps {
  children?: ReactNode
}

const topAlbums: FC<IProps> = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const dispatch = useAppDispatch()
  const { topAlbums, total } = useAppSelector(
    (state) => ({
      topAlbums: state.album.topAlbums,
      total: state.album.total
    }),
    shallowEqual
  )
  function handlePaginationChange(page: number) {
    setPageIndex(page)
    dispatch(fetchTopAlbumsAction(page - 1))
  }
  return (
    <TopAlbumWrapper>
      <SectionHeaderV1 title="全部新碟" />
      <div className="albumList">
        {topAlbums.map((item) => {
          return (
            <div key={item.id} className="albumItem">
              <AlbumItemV1 itemData={item} />
            </div>
          )
        })}
      </div>
      <div className="Pagination">
        <Pagination
          current={pageIndex}
          total={total}
          showSizeChanger={false}
          onChange={handlePaginationChange}
        />
      </div>
    </TopAlbumWrapper>
  )
}

export default memo(topAlbums)
