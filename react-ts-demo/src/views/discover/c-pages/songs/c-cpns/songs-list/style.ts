import styled from 'styled-components'

export const SongsListWrapper = styled.div`
  .songs-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: -30px;
    .songs-item {
      width: 140px;
      margin: 10px 30px 10px 0;
    }
  }
  .Pagination {
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
  }
`
