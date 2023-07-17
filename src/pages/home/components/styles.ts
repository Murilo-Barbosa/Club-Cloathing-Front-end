import styled from 'styled-components'

export const categoriesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const categoriesContent = styled.div`
  height: 100%;
  width: 1920px;
  display: grid;
  grid-template-areas:
    'a b'
    'c c'
    'd e';
  grid-gap: 15px;
  padding: 30px;
`
