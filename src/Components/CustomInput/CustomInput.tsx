import { FunctionComponent, InputHTMLAttributes } from 'react'

//styles
import * as S from './styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
  hasError,
  ...rest
}) => {
  return (
    <S.CustomInputContainer
      hasError={hasError}
      {...rest}></S.CustomInputContainer>
  )
}

export default CustomInput
