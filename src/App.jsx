import { HashRouter, Routes, Route } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"

import Home from './routes/Home'
import Main from "./routes/Main"
function App() {

  return (

    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={null}>

            <Route index element={<Main />} />

            {/*<Route  path="/contact" element={<Contact />} />*/}

          </Route>
        </Routes>
      </HashRouter>
      {/*<FooterComponent/>*/}
    </>

  )
}

export default App
