import { Provider } from 'react-redux'
import './App.css'
import Header from './views/Header/Header'
import { store } from './store/store'
import Routes from './routes/routes'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  )
}

export default App
