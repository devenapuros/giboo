import { Row } from "./Layout/Row";
import { OutlineButton } from "./OutlineButton";

export const HomeSectionsTabs = ({ currentSection, setCurrentSection }) => {
    return (
        <Row margin="3rem 0 0 0" gap="1rem" justifyContent="center">
            <OutlineButton
                label="Popular searchs"
                width="12rem"
                borderRadius="25px"
                active={currentSection === "popular-searchs"}
                handleClick={() => setCurrentSection("popular-searchs")}
            />
            <OutlineButton
                label="Explore"
                width="12rem"
                borderRadius="25px"
                active={currentSection === "explore"}
                handleClick={() => setCurrentSection("explore")}
            />
        </Row>
    );
};
