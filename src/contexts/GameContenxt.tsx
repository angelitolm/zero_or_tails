import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { TURNS } from '../constants/turns';
import { WINNER_COMBOX } from '../constants/winnerCombox';
import { useLocalStorage } from '../hooks/useLocalStorage';


interface GameContextInterface {
    board: TURNS[];
    setBoard: (value: TURNS[]) => void;
	turn: TURNS;
	setTurn: (turn: TURNS) => void;
    winner?: TURNS | null | boolean;
    setWinner: (w: TURNS) => void;
    updateBoard: (i: number) => void;
    checkWinner: (v: TURNS[]) => TURNS | null;
    resetGame: () => void;
    isLoading?: boolean;
    isEmpty: boolean;
}

const GameContext = createContext<GameContextInterface>({
    board: [],
    setBoard: () => null,
    turn: TURNS.x,
    setTurn: () => null,
    winner: undefined,
    setWinner: () => null,
    updateBoard: () => null,
    checkWinner: () => null,
    resetGame: () => null,
    isLoading: false,
    isEmpty: true
});

const GameProvider = ({ ...props }) => {
    const [board, setBoard] = useLocalStorage<TURNS[]>('board', Array(9).fill(null)); // Initial board
    const [turn, setTurn] = useLocalStorage<TURNS>('turn', TURNS.x); // Initial turn
    const [winner, setWinner] = useLocalStorage<TURNS | null | false>('winner', false); // Winner [x or o]
    const [isLoading, setIsLoading] = useState<boolean>(false); // Winner [x or o]

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
        // tie
        return null;
    }, []);

    /** Check if the game is over */
    const checkEndGame = (newBoard: TURNS[]) => {
        return newBoard?.every(box => box !== null);
    }

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
        if (newWinner) setWinner(newWinner);
        // tie
        else if (checkEndGame(newBoard)) setWinner(null);
    }, [board, checkWinner, setBoard, setTurn, setWinner, turn, winner]);

    const resetGame = () => {
        setIsLoading(true);
        setBoard(Array(9).fill(null));
        setTurn(TURNS.x);
        setWinner(false);
        setTimeout(() => setIsLoading(false), 500);
    };

    const isEmpty = useMemo(() => {
        return !board?.some(i => (i === TURNS.x || i === TURNS.o))
    }, [board]);
    

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
            checkWinner,
            resetGame,
            isLoading,
            isEmpty
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