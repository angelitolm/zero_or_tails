
import { NextUIProvider } from '@nextui-org/react';
import { Board } from './components/Board';
import { GameProvider } from './contexts/GameContenxt';
import { Turns } from './components/Turns';
import { Header } from './components/Header';
// import { Score } from './components/Score';
import shapeAvif from './assets/shape.avif';
import './App.css';

function App() {

  return (
    <NextUIProvider>

      {/* <Score /> */}

      <div className="app-container">
        <GameProvider>

        <picture>
          <img
            src={shapeAvif}
            alt=""
            className="w-[71.75rem] flex-none max-w-none pretty-img"
            decoding="async"
          />
        </picture>
          <Header />

          <main>
            <Board />
          </main>

          <footer>
              <Turns />
          </footer>

        </GameProvider>
      </div>
    </NextUIProvider>
  )
}

export default App
