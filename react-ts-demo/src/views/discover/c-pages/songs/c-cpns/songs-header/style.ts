import styled from 'styled-components'

export const SongsHeaderWrapper = styled.div`
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 6px;
  display: flex;
  justify-content: space-between;
  .left-content {
    position: relative;
    display: flex;
    align-items: center;
    .title {
      font-size: 25px;
    }
    .left-btn {
      background-color: #fafafa;
      border: 1px solid #d3d3d3;
      border-radius: 3px;
      color: #0c73c2;
      margin-left: 10px;
      text-align: center;
      cursor: pointer;
      position: relative;
      top: 2px;
      width: 91px;
      height: 31px;
      line-height: 31px;
      &:hover {
        background-color: #fff;
      }

      i {
        position: relative;
        left: 5px;
        bottom: 2px;
        display: inline-block;
        width: 8px;
        height: 5px;
        background-position: -70px -543px;
      }
    }
  }

  .right-btn {
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    background-color: #c20c0c;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #aaa;
  }
`
