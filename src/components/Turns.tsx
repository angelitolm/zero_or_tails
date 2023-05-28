import { memo } from 'react';
import { Button, Text } from '@nextui-org/react';
import { useGame } from '../contexts/GameContenxt';
import { TURNS } from '../constants/turns';

export const Turns = memo(() => {
    const {turn} = useGame();

    return (
        <div className="turns">
            <div>
            <Text
                h4
                css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Turn:
            </Text>
            </div>
            <Button size="lg" shadow color={turn === TURNS.x ? 'gradient' : '#eee'} auto>
                x
            </Button>
            <Button size="lg" shadow color={turn === TURNS.o ? 'error' : '#eee'} auto>
                o
            </Button>
        </div>
    )
});