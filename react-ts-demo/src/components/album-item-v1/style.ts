import styled from 'styled-components'

export const ItemWrapper = styled.div`
  .album-image {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }

    .btm {
      display: none;
      position: absolute;
      bottom: 0;
      right: 22px;
      height: 22px;
      width: 22px;
      cursor: pointer;
    }

    .play {
      background-position: 0 0;
    }

    :hover {
      .btm {
        display: block;
      }
    }
  }

  .album-info {
    font-size: 12px;
    width: 100px;
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`
