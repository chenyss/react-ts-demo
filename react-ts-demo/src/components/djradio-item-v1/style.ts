import styled from 'styled-components'

export const DjRadioItemV1Wrapper = styled.div`
  width: 150px;
  .img {
    height: 150px;
    width: 150px;
    border-radius: 5px;
  }
  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 5px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .rcmdtext {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 5px;
  }
`
