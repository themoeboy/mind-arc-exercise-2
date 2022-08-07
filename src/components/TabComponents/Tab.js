import styled from "styled-components";

const TabContainer = styled.ul`
    width: 50%;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    background-color: ${props => props.isActive ? `#256D85`: `#002B5B`};
    ${props => {
        switch(props.type) {
            case 'first':
                return 'border-bottom-left-radius: 2rem; border-top-left-radius: 2rem;' 
            case 'last':
                return 'border-bottom-right-radius: 2rem; border-top-right-radius: 2rem;' 
            default:
              return ''
          }}}
    :hover {
        background-color:${props => props.isActive ? `#256D85`: `#2B4865`};
    }
`

const Tab = ({ id, type, label, activeTab, setActiveTab }) => {
    const isActive = activeTab === id;
 return (
    <TabContainer onClick={()=> setActiveTab(id)} isActive={isActive} type={type}> {label} </TabContainer>
 )
}

export default Tab