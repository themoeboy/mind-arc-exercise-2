import styled from "styled-components";
import { useState } from "react";
import data from '../../data.json'
import Tab from './Tab'
import TabContent  from "./TabContent";

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 400px;
    background: #002B5B;
    box-sizing: border-box;
    padding: 2rem 1rem;
    color: #8FE3CF;
`;

const TabContentContainer = styled.div`
    width: auto;
    height: auto;
    margin: 20px 40px;
    box-sizing: border-box;
    background-color: #256D85;
    border: 1px solid #256D85;
    border-radius: 15px;
    padding: 20px;
`;

const TabsContainer = styled.ul`
    width: 60%;
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #256D85;
    border-radius: 2rem;
    padding-left: 0px;
`;


const Tabs = () => {
 const [activeTab, setActiveTab] = useState(`${data[0].title}-0`)
 const tabCount = data.length;
 return (
   <MainContainer>
    <TabsContainer>
        {data.map(({title} , index) => {
            if(index === 0) return (<Tab id={`${title}-${index}`} activeTab={activeTab} setActiveTab={setActiveTab} type='first' label={title} />)
            else if(index === tabCount - 1) return (<Tab id={`${title}-${index}`} setActiveTab={setActiveTab} activeTab={activeTab} type='last' label={title} />)
            else return (<Tab id={`${title}-${index}`} setActiveTab={setActiveTab} activeTab={activeTab}  label={title}/> )
        })}
    </TabsContainer>
    <TabContentContainer> 
    {data.map(({title, content} , index) => { 
        return ( <TabContent id={`${title}-${index}`} activeTab={activeTab} content={content}/> )
    })}
    </TabContentContainer>
   </MainContainer>

 )
}

export default Tabs