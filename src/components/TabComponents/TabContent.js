import styled from "styled-components";
import parse from "html-react-parser";

const TabContentContainer = styled.div`
    height:auto;
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s;
`

const TabContent = ({ id, activeTab, content}) => {
    const isActive = activeTab === id;
    return (
        isActive ? <TabContentContainer> {parse(content)} </TabContentContainer> : null
    )
}

export default TabContent