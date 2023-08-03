import { ButtonHTMLAttributes, FunctionComponent } from 'react'

import * as S from './styles'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
}

const CustomButtom: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <S.CustomButtonContainer {...rest}>
      {startIcon && <S.IconContainer>{startIcon}</S.IconContainer>}
      {children}
    </S.CustomButtonContainer>
  )
}

export default CustomButtom
