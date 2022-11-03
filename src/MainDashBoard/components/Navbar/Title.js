import { Heading } from "@chakra-ui/react";
import "./CSS/Title.css";
export default function Title() {
    return (
        <div className="Title">
            <Heading size="xl">
                FITNESS
            </Heading>
            <div className="firstdot">
                <Heading size="xl">
                    FIRST
                </Heading>
                <Heading className="dot" size="xl" >
                    .
                </Heading>
            </div>
        </div>
    )
};
