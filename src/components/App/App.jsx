import { Greeting } from '../../pages/Greeting/Greeting'
import { HomePage } from '../../pages/HomePage/HomePage'
import { MyName } from '../MyName/MyName'
import { RegForm } from '../RegForm/RegForm'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Hello React!</h1>
        <MyName></MyName>
        <HomePage />
        <hr style={{marginBlock: '20px'}} />
        <Greeting isLoggedIn={true}/>
        <Greeting isLoggedIn={false}/>
        <RegForm />
      </div>
    </>
  )
}

export default App
