
import { NextUIProvider, Text } from '@nextui-org/react';
import { Board } from './components/Board';
import { GameProvider } from './contexts/GameContenxt';
import './App.css';
import { Turns } from './components/Turns';

function App() {

  return (
    <NextUIProvider>
      <GameProvider>

        <header>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
              marginBottom: '2rem'
            }}
            weight="bold"
          >
            Zero or Tail
          </Text>
        </header>

        <main>
          <Board />
        </main>

        <footer>
            <Turns />
        </footer>

      </GameProvider>
    </NextUIProvider>
  )
}

export default App
