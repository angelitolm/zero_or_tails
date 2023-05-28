import {memo, ReactNode} from 'react';
import { Button } from "@nextui-org/react";
import { useGame } from '../contexts/GameContenxt';
import { TURNS } from '../constants/turns';
import classNames from 'classnames';

interface BoxProps {
    children?: ReactNode;
    index: number;
    value: TURNS
}

export const Box = memo(({children, index, value}: BoxProps) => {
    const {updateBoard} = useGame();

    return (
        <div>
            <Button 
                shadow 
                color={value === TURNS.x ? 'gradient' : value === TURNS.o ? 'error' : '#eee'} 
                auto 
                className={classNames("box", !value ? 'box-empty' : '')} 
                onClick={() => updateBoard(index)}
            >
                {children}
            </Button>
        </div>
    );
});