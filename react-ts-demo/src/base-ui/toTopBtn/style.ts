import styled from 'styled-components'

export const ToTopBtnWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 160px;
  margin-left: 500px;
  .toTopBtn {
    width: 50px;
    height: 50px;
    padding: 5px;
    border-radius: 5px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    :hover {
      background-color: #e7e7e7;
      cursor: pointer;
    }
  }
`
