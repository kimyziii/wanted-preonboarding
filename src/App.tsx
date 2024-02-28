import './globals.css'
import { Provider } from 'react-redux'
import Wrapper from './components/Main/wrapper'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  )
}

export default App
