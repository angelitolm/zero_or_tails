import { memo, useEffect } from "react";
import { Text, Card, Avatar, Popover, Button  } from "@nextui-org/react";
import logo from '../assets/react.svg';

const DevCard = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const followOnTwitter = () => {
        window.open("https://twitter.com/angelitolabm", "_blank");
    }

    return (
        <Popover placement="top">
            <Popover.Trigger>
                <Text
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        cursor: "pointer"
                    }}
                    weight="bold"
                >Angel Labrada Massó</Text>
            </Popover.Trigger>
            <Popover.Content>
                <Card 
                css={{ minWidth: "350px" }}
                >
                    <Card.Body>
                        <div style={{display: 'flex', gap: 10, width: '100%'}}>
                            <Avatar
                                src="https://avatars.githubusercontent.com/u/14825189?v=4"
                                size="lg"
                            />
                            <div style={{width: '100%'}}>
                                <Text weight="bold">Angel Labrada Massó</Text>
                                <Text>@angelitolabm</Text>
                            </div>
                            
                            <Button shadow color="primary" auto onPress={followOnTwitter}>
                                Follow
                            </Button>
                        </div>

                        <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                            <Text>Senio Software Enginner. I love </Text>
                            <Avatar src={logo} size="xs" />
                            <Text>ReactJS</Text>
                        </div>
                        
                    </Card.Body>
                </Card>
            </Popover.Content>
        </Popover>
    );
}

const InspiredByCard = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const followOnTwitter = () => {
        window.open("https://twitter.com/midudev", "_blank");
    }

    return (
        <Popover placement="top">
            <Popover.Trigger>
                <Text
                    css={{
                        textGradient: "45deg, $purple600 -20%, $pink600 100%",
                        cursor: "pointer"
                    }}
                    weight="bold"
                >Midudev's tutorial</Text>
            </Popover.Trigger>
            <Popover.Content>
                <Card css={{ minWidth: "350px" }}>
                    <Card.Body>
                        <div style={{display: 'flex', gap: 10, width: '100%'}}>
                            <Avatar
                                src="https://yt3.ggpht.com/ytc/AGIKgqNJ1bVZm3gBadoguQXaBPbPKBnwXHrUVbItXZJl=s48-c-k-c0x00ffffff-no-rj"
                                size="lg"
                            />
                            <div style={{width: '100%'}}>
                                <Text weight="bold">Miguel Angel</Text>
                                <Text>@midudev</Text>
                            </div>
                            <Button shadow color="primary" auto onPress={followOnTwitter}>
                                Follow
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Popover.Content>
        </Popover>
    );
}

export const GlobalFooter = memo(() => {

    return (
        <div className="global-footer">
            <div className="developed-by">
                <div>
                    <Text weight="bold">Developed by:</Text>
                </div>
                
                <DevCard />
            </div>

            <div className="developed-by">
                <div>
                    <Text weight="bold">Inspired by:</Text>
                </div>
                
                <InspiredByCard />
            </div>
            
        </div>
    )
});