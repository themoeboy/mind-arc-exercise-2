import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';
import parse from "html-react-parser";
import '../../index.css';


const AccordionContainer = styled.div`
    width: auto;
    height: auto;
    background: #002B5B;
    box-sizing: border-box;
    padding: 10px;
   
`;

const AccordionTitle = styled.div`
    display:flex;
    width: auto;
    padding: 10px 20px;
    border: 1px solid #256D85;
    border-radius: 2rem;
    justify-content: space-between;
`;

const AccordionIcon = styled.div`
    width: auto;
    font-weight: bold;
    font-size: 15px;
`;

const AccordionContent = styled.div`
    width: auto;
    height: auto;
    margin-top: 20px;
    box-sizing: border-box;
    background-color: #256D85;
    border: 1px solid #256D85;
    border-radius: 15px;
    padding: 30px;
`;

const Accordion = ({title, content, id, activeAccordion, setActiveAccordion}) => {
 const isActive = activeAccordion === id;
 return (
   <AccordionContainer onClick={()=>  { if(id === activeAccordion) setActiveAccordion('')
    else setActiveAccordion(id)}}>
    <AccordionTitle>
      {title}
      <AccordionIcon>
      { isActive ? '-' : '+' }
      </AccordionIcon>
    </AccordionTitle>
    {
      <CSSTransition
        in={isActive }
        timeout={200}
        classNames="accordion"
        unmountOnExit
      >
        <AccordionContent>
          {parse(content)}
        </AccordionContent>
      </CSSTransition>
    }
   </AccordionContainer>
 )
}

export default Accordion