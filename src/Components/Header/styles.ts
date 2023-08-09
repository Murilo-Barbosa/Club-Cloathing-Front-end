import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const Container = styled.div`
  width: 100%;
  background-color: ${Colors.background.dark};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: ${Colors.text.white};
`
export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`
export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderItem = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    margin-right: 30px;

    &:hover {
      cursor: pointer;
      color: ${Colors.text.hover};
    }
  }
`
