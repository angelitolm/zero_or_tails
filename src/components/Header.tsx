import { memo } from 'react';
import { Button, Text } from "@nextui-org/react";
import { useGame } from '../contexts/GameContenxt';

export const Header = memo(() => {
    const {resetGame, isEmpty} = useGame();

    return (
        <header>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
              marginBottom: '1rem'
            }}
            weight="bold"
          >
            Zero or Tail
          </Text>

          <Button 
                shadow 
                color="gradient"
                auto 
                size="lg"
                disabled={isEmpty}
                onPress={() => {
                    resetGame();
                }}
            >
                Reset Game
            </Button>
        </header>
    )
});