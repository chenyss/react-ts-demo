import styled from 'styled-components'

export const TopAlbumWrapper = styled.div`
  margin-top: 20px;
  .albumList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .albumItem {
      width: 153px;
      box-sizing: border-box;
    }
  }
  .Pagination {
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
  }
`
