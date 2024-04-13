import { Provider } from 'react-redux'
import './App.css'
import Header from './views/Header/Header'
import InspectionForm from './views/InspectionForm/InspectionForm'
import { store } from './store/store'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <InspectionForm />
    </Provider>
  )
}

export default App
