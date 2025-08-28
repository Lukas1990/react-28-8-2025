import { Routes, Route, NavLink, Link } from 'react-router-dom'
import {useState} from "react"

import budik_biely from './img/budik_biely.svg'
import budik_cierny from './img/budik_cierny.svg'
import logo from './img/logo.png'

import ToDoApp from './components/ToDoApp/ToDoApp.jsx'
import Weather from './components/weatherforecast/Weather.jsx'

import lang from './lang'

function App() {

  const [phrase, setPhrase] = useState(lang.sk.phrase)

  function handeLangChange(e) {
    let ver = e.target.value
    setPhrase(lang[ver].phrase)
  }

  return (
    <>
      <header>
        <div id="header_obal">
          <div className="kontajner">
            <h1><Link to="/"><img src={budik_biely} alt="budik"/> {phrase["React examples"]}</Link></h1>
            <nav>
              <NavLink to="/">{phrase["To do list"]}</NavLink>
              <NavLink to="/weather">{phrase["Weather forecast"]}</NavLink>
            </nav>
            <select onChange={handeLangChange}>
              <option value="sk">SK</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
        <div className="kontajner" id="pasik"></div>
      </header>
      <main>
        <Routes> 
          <Route path="/" element={ <ToDoApp phrase={phrase} /> }> </Route>
          <Route path="/weather" element={ <Weather phrase={phrase} /> }> </Route>
        </Routes> 
      </main>
      <footer>
        <div className="kontajner">
          <p><img src={budik_cierny} alt="budik"/>{phrase["The application is also available on"]} <a href="">github.com</a></p>
          <div>
            <img src={logo} alt="logo"/>
            <p>© gov.sk copyright</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
