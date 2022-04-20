import React from 'react'
import { Container, Content } from './styles'
import {
    FaTimes,
} from 'react-icons/fa';

const Sidebar = ({active} : {active:any}) => {
    
    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container>
            <FaTimes onClick={closeSidebar}/>
                <Content>
                   
                </Content>
        </Container>
    )

}

export default Sidebar
