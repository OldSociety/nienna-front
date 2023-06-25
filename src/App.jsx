import Layout from './Layout/Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

//Test Code used for JEST !!! DO NOT DELETE !!!
export function timesThree(numberToMultiply) {
  return numberToMultiply * 3
}

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />} />
    </Routes>
  )
}

export default App
