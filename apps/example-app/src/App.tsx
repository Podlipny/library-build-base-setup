import { useState } from 'react'
import { Button, Header } from 'vitejs-library-base-setup'

// import { Header } from 'vitejs-library-base-setup/header'
// import ButtonAbsolute from 'vitejs-library-base-setup/button'

import 'vitejs-library-base-setup/dist/style.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Example app build with custom libraries</h1>
      <h2>ViteJs library build</h2>
      <div className='card'>
        <Button primary>Primary button</Button>
        <Button>Secondary button</Button>
        {/* <ButtonAbsolute>Absolute button</ButtonAbsolute> */}
        <Header />
      </div>
    </div>
  )
}

export default App
