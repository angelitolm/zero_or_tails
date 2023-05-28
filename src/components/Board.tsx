import { memo } from "react";
import { useGame } from "../contexts/GameContenxt";
import { Box } from "./Box";
import { TURNS } from "../constants/turns";
import { WinnerModal } from "./WinnerModal";

export const Board = memo(() => {
    const { board } = useGame();

    return (    
        <div className="board">
            {board?.map((value: TURNS, idx: number) => {
                return (
                    <Box 
                        key={idx}
                        index={idx}
                        value={value}
                    >
                        {value}
                    </Box>
                )
            })}

            <WinnerModal />
        </div>
    );
});