import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import Tabs from './components/TabComponents/Tabs'
import Accordions from './components/AccordionComponents/Accordions'

const Wrapper = styled.div`
  display:flex;
  width: 100vw;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  justify-content: center;
`

const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
   })
   const renderDesktopView = () => {
     return (<Tabs/>);
   }
  
   const renderMobileView = () => {
    return (<Accordions/>);
    }
  return (
    <Wrapper>
       {isDesktop ? renderDesktopView() : renderMobileView()}
    </Wrapper> 
  );
}

export default App;
