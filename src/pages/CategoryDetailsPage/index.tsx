import { useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import CategoryDetails from './components/CategoryDetails'

const CategoryDetailsPage: React.FC = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  )
}

export default CategoryDetailsPage
