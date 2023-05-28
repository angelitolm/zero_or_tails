import { memo } from 'react';
import { Button, Text } from '@nextui-org/react';
import { useGame } from '../contexts/GameContenxt';
import { TURNS } from '../constants/turns';

export const Turns = memo(() => {
    const {turn} = useGame();

    return (
        <div className="turns">
            <div>
                <Text>Turn:</Text>
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