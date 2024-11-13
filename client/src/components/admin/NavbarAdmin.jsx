import React, { useState } from 'react'
import styled from 'styled-components'
import iconUser from '../../assets/user-icon.png'
import publication from '../../assets/publication-icon.png'
import dashboardIcon from '../../assets/dashboard-icon.png'

const NavbarAdmin = ({setActiveComponent}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Aside>
        <div>
            <img src="" alt="logo Luxmundi blog" />
            <List>
                <Item 
                    onClick={()=> {
                        setActiveComponent("FormImage")
                        setSelectedItem("home")
                    }} 
                    className={selectedItem === "home" ? "active" : ""}
                >
                    <Image src={dashboardIcon} alt="Icono dashboard" />
                    <Text>Dashboard</Text>
                </Item>
                <Item 
                    onClick={()=> {
                        setActiveComponent("PostManagement")
                        setSelectedItem("post")
                    }}
                    className={selectedItem === "post" ? "active" : ""}
                >
                    <img src={publication} alt="Icono publicaciones" />
                    <Text>Publicaciones</Text>
                </Item>
                <Item 
                    onClick={()=> {
                        setActiveComponent("UserManagement")
                        setSelectedItem("user")
                    }}
                    className={selectedItem === "user" ? "active" : ""}
                >
                    <img src={iconUser} alt="Icono usuarios" />
                    <Text>Usuarios</Text>
                </Item>
            </List>
        </div>
    </Aside>
  )
}

export default NavbarAdmin

const Aside = styled.div`
    z-index: 100;
    width: 30%;
    background-color: #333;
    
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        position: fixed;
        bottom: 0;
        z-index: 100;
    }
`
const List = styled.ul`
    list-style:none;
    display: flex;
    flex-direction: column;
    padding: 4rem 0 0 2rem;
    color: white;
    aling-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: row;
        padding: 1rem;
        justify-content: space-around;
    }
`

const Item = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 1rem;
    align-items: center;
    font-size: 1.2rem;
    text-aling: center;
    border-radius: 1rem 0 0 1rem;
    margin-bottom: 1rem;

    &.active {
        background-color: #444;
        cursor: pointer;
        border-radius: 1rem;
        margin-left: -1rem;
        margin-right: -1rem;
        padding-left: 1rem;
    }

    &:hover{
        background-color: #444;
        cursor: pointer;
        margin-left: -1rem;
        padding-left: 1rem;
        transition: 0.5s;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        padding: 0.5rem;
        
        &.active {
            margin: 0;
            padding: 0.5rem;
        }
        
        &:hover {
            margin: 0;
            padding: 0.5rem;
        }
    }
`
const Image = styled.img`
    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`
const Text = styled.p`
    display: flex;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
        margin: 0;
    }
`