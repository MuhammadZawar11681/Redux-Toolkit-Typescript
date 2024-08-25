// import './App.css'
// import { CakeView } from './features/cake/CakeView'
// import { IcecreamView } from './features/icecream/IcecreamView'
// import { UserView } from './features/user/UserView'

// function App() {
//   return (
//     <div className='App'>
//       <CakeView />
//       <IcecreamView />
//       <UserView />
//     </div>
//   )
// }

// export default App

import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Bakery Shop</h1>
      </header>
      <main className="App-content">
        <div className="App-card">
          <CakeView />
        </div>
        <div className="App-card">
          <IcecreamView />
        </div>
        <div className="App-card">
          <UserView />
        </div>
      </main>
    </div>
  )
}

export default App
