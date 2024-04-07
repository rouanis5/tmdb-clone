import Navbar from './components/layouts/Navbar'
import Home from './pages/Home'
import store from './helpers/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  )
}

export default App
