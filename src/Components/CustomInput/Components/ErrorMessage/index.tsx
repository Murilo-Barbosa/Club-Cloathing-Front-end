import { FunctionComponent } from 'react'

//styles
import * as S from './styles'

interface ErrorMessageProps {
  children: React.ReactNode
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>
}

export default ErrorMessage
