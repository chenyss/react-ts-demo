import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { DjRadioWrapper } from './style'
import RadioCategory from './c-cpns/radioCategory'
import RadioRecommend from './c-cpns/radioRecommend'
import RadioRanking from './c-cpns/radioRanking'
import { useAppDispatch } from '@/store'
import { fetchDjRadioCatelistAction } from './store/djradio'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDjRadioCatelistAction())
  }, [])
  return (
    <DjRadioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioRanking />
    </DjRadioWrapper>
  )
}

export default memo(Djradio)
