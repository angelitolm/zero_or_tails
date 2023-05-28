
import { memo } from 'react';
import { Button } from "@nextui-org/react";
import CupIcon from './CupIcon';

export const Score = memo(() => {

    return (
        <div className="score-wrapper">
            <Button color="gradient" auto ghost size="lg">
                <CupIcon />
            </Button>
           
        </div>
    )
});