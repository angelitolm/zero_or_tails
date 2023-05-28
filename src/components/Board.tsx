import { memo } from "react"
import { useGame } from "../contexts/GameContenxt";
import { Box } from "./Box";

export const Board = memo(() => {
    const { board } = useGame();

    return (
        <div className="board">
            {board?.map((value: string, idx: number) => {
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
        </div>
    );
});