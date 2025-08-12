import { Route, BrowserRouter as Router, Routes } from "react-router-dom"


import { MapListKeys, siteMap } from "./assets/types/route"






function App() {



  return (
    <Router>
        <Routes>
          {
            MapListKeys.map( key =>
              <Route key={key} path={key} element={siteMap[key]} />
            )
          }
        </Routes>
    </Router>
  )
}

export default App
