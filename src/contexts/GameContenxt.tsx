import { createContext, useContext, useState, useCallback } from 'react';
import { TURNS } from '../constants/turns';
import { WINNER_COMBOX } from '../constants/winnerCombox';


interface GameContextInterface {
    board: TURNS[];
    setBoard: (value: TURNS[]) => void;
	turn: TURNS;
	setTurn: (turn: TURNS) => void;
    winner?: TURNS;
    setWinner: (w: TURNS) => void;
    updateBoard: (i: number) => void;
    checkWinner: (v: TURNS[]) => TURNS | null;
}

const GameContext = createContext<GameContextInterface>({
    board: [],
    setBoard: () => null,
    turn: TURNS.x,
    setTurn: () => null,
    winner: undefined,
    setWinner: () => null,
    updateBoard: () => null,
    checkWinner: () => null
});

const GameProvider = ({ ...props }) => {
    const [board, setBoard] = useState<TURNS[]>(Array(9).fill(null)); // Initial board
    const [turn, setTurn] = useState<TURNS>(TURNS.x); // Initial turn
    const [winner, setWinner] = useState<TURNS | undefined>(undefined); // Winner [x or o]

    /**
     * Check winner
     */
    const checkWinner = useCallback((boardToCheck: TURNS[]) => {
        for (const combo of WINNER_COMBOX) {
            const [a, b, c] = combo;

            if (
                boardToCheck[a] &&
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]
            ) return boardToCheck[a];
        }
        // table
        return null;
    }, []);

    /** 
     * Update Board 
     */
    const updateBoard = useCallback((index: number) => {
        if (board[index] || winner) return; // has been clicked or the board has already winner

        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard); // update board
        setTurn(turn === TURNS.x ? TURNS.o : TURNS.x); // update turn

        // check winner
        const newWinner = checkWinner(newBoard);
        if (newWinner) {
            setWinner(newWinner);
            alert('winner ' + newWinner)
        }
    }, [board, checkWinner, turn, winner]);
    

    return (
        <GameContext.Provider 
        value={{ 
            board, 
            setBoard, 
            turn, 
            setTurn,
            winner, 
            setWinner,
            updateBoard,
            checkWinner
        }}
        {...props} 
        />
    );
}

const useGame = () => {
	const context = useContext(GameContext);
	if (context === undefined) {
		throw new Error(
			'useGame must be used within a GameProvider'
		);
	}

	return context;
};

export { useGame, GameProvider };