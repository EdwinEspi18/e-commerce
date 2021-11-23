import { useDispatch } from 'react-redux'
import { getCarts } from '../actions/cart.action'
import Inicio from '../components/Inicio'
import Main from '../components/Main'

const DashboardRouter = () => {
  const dispatch = useDispatch()
  dispatch(getCarts())
  return (
    <>
      <Inicio />
      <Main />
    </>
  )
}

export default DashboardRouter
