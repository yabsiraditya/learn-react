import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/myButton'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => {
  const navList = "Yabsir Aditya"
  const navigationBar = "Navigation Bar"

  const clicked = () => {
    return alert("Button Ke Trigger")
  }

  const paragraf = () => {
    return (
      <i>Mantap Coy</i>
    )
  }

  return (
    <>
      <Navbar navText={navList} navHeading={navigationBar} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + Vite</h1>
      <div className="card">
        <MyButton clicked={clicked} />
        <p>
          Hallo Cuy :P
        </p>
      </div>

      <Footer paragraf={paragraf}/>
    </>
  )
}

export default App
