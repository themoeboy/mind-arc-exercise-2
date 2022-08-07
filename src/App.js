import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';

const Wrapper = styled.div`
`

const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
   })

   const renderDesktopView = () => {
   
   }
  
   const renderMobileView = () => {
   
    }
  return (
    <Wrapper>
       {isDesktop ? renderDesktopView() : renderMobileView()}
    </Wrapper> 
  );
}

export default App;
