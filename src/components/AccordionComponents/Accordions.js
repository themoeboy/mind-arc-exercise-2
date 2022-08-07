import styled from "styled-components";
import { useState } from "react";
import data from '../../data.json';
import Accordion from './Accordion';

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: #002B5B;
    box-sizing: border-box;
    padding: 2rem 1rem;
    color: #8FE3CF;
`;

const AccordionContainer = styled.div`
    width: 100%;
`;



const Accordions = () => {
 const [activeAccordion, setActiveAccordion] = useState(`${data[0].title}-0`)
 return (
   <MainContainer>
    <AccordionContainer>
        {data.map(({title, content}, index) =>  <Accordion  id={`${title}-${index}`} activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion} title={title} content={content} /> )}
    </AccordionContainer>
   </MainContainer>
 )
}

export default Accordions