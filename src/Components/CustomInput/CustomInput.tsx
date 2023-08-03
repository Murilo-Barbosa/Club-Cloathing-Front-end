import React, { FunctionComponent, InputHTMLAttributes } from 'react'

//styles
import * as S from './styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = React.forwardRef(
  (props, ref) => {
    return <S.CustomInputContainer {...props} ref={ref as any} />
  }
)

CustomInput.displayName = 'CustomInput'

export default CustomInput
