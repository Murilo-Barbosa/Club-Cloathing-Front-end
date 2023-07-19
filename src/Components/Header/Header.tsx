import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const Header = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <S.Container>
      <S.HeaderTitle>CLUB CLOTHING</S.HeaderTitle>
      <S.HeaderItems>
        <S.HeaderItem>EXPLORAR</S.HeaderItem>
        <S.HeaderItem onClick={handleLoginClick}>LOGIN</S.HeaderItem>
        <S.HeaderItem>CRIAR CONTA </S.HeaderItem>
        <S.HeaderItem>
          <BsCart3 size={20} />
        </S.HeaderItem>
      </S.HeaderItems>
    </S.Container>
  )
}

export default Header
