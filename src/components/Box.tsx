import {memo, ReactNode} from 'react';
import { Button, Loading } from "@nextui-org/react";
import { useGame } from '../contexts/GameContenxt';
import { TURNS } from '../constants/turns';
import classNames from 'classnames';

interface BoxProps {
    children?: ReactNode;
    index: number;
    value: TURNS
}

export const Box = memo(({children, index, value}: BoxProps) => {
    const {updateBoard, isLoading} = useGame();

    return (
        <div className="box">
            <Button 
                shadow 
                color={value === TURNS.x ? 'gradient' : value === TURNS.o ? 'error' : '#eee'} 
                auto 
                className={classNames("box", !value ? 'box-empty' : '')} 
                onPress={() => updateBoard(index)}
                disabled={isLoading}
            >
                {isLoading ? <Loading color="currentColor" size="sm" className="box box-empty" /> : children}
            </Button>
        </div>
    );
});