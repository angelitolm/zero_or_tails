import { memo, useState, useEffect, useMemo } from 'react';
import { Modal, Text, Button } from "@nextui-org/react";
import Lottie from "lottie-react";
import { useGame } from '../contexts/GameContenxt';
import { TURNS } from '../constants/turns';
import winnerAnimation from '../assets/trophy_winner.json';
import tie from '../assets/tie.json';

export const WinnerModal = memo(() => {

    const {winner, resetGame} = useGame();

    const [isVisible, setVisible] = useState<boolean>(winner === TURNS.x || winner === TURNS.o);

    const closeHandler = () => setVisible(false);

    useEffect(() => {
        if (winner === TURNS.x || winner === TURNS.o || winner === null)
        setVisible(true);
    }, [winner]);

    const content = useMemo(() => {
        if (winner === null)
            return (
                <>
                    <Lottie animationData={tie} loop={true} />
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            textAlign: 'center'
                        }}
                        weight="bold"
                    >
                        The game has ended in a tie
                    </Text>
                    <Button 
                        shadow 
                        color="gradient"
                        auto 
                        size="lg"
                        onPress={() => {
                            resetGame();
                            closeHandler();
                        }}
                    >
                        Reset Game
                    </Button>
                </>
            );

        return (
            <>
                <Lottie animationData={winnerAnimation} loop={true} />

                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        textAlign: 'center'
                    }}
                    weight="bold"
                >
                    The player <span className="winner">{winner}</span> won!!!
                </Text>

                {/* TODO: Coming soom */}
                {/* <Input label="Winner name" placeholder="Input your name" size="lg" /> */}

                <Button 
                    shadow 
                    color="gradient"
                    auto 
                    size="lg"
                    onPress={() => {
                        resetGame();
                        closeHandler();
                    }}
                >
                    Reset Game
                </Button>
            </>
        )
    }, [resetGame, winner]);

    return (
        <Modal 
            preventClose
            open={isVisible} 
            onClose={closeHandler}
        >
            <Modal.Header
            css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
            >
                
            </Modal.Header>
            <Modal.Body css={{padding: '1rem 1rem 2rem 1rem'}}>
                {content}
            </Modal.Body>
      </Modal>
    )
})
