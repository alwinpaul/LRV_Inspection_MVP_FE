
import './App.css'
import Header from './views/Header/Header'

import Routes from './routes/routes'
import { useEffect } from 'react'
import { useAppDispatch } from './hooks/hooks'
import { verifyAuth } from './thunks/login.thunk'

function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(verifyAuth())
  }, [])

  return (
    <>
      <Header />
      <Routes />
    </>
  )
}

export default App
