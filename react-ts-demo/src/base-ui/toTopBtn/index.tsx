import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ToTopBtnWrapper } from './style'
import { log } from 'console'
import { CaretUpOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const toTopBtn: FC<IProps> = () => {
  const [showBtn, setShowBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handldScrollListener)
  })
  function handldScrollListener() {
    if (showBtn === false && document.documentElement.scrollTop > 0) {
      setShowBtn(true)
    }
    if (showBtn === true && document.documentElement.scrollTop === 0) {
      setShowBtn(false)
    }
  }
  function handleToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <ToTopBtnWrapper>
      {showBtn && (
        <button className="toTopBtn" onClick={handleToTop}>
          <CaretUpOutlined />
          <div>TOP</div>
        </button>
      )}
    </ToTopBtnWrapper>
  )
}

export default memo(toTopBtn)
