import styled from "styled-components";

export const Header = styled.header`
background-color: black;
width:100%;
justify-content: end;
display: flex;
flex-wrap: wrap;
padding: 15px;
`

export const Navigate = styled.nav`

display: flex;
flex-wrap: wrap;
align-items: center;
`

export const Lista = styled.ul`
position: relative;
display: flex;
flex-wrap: wrap;

li{
    margin-right: 10px;
    position: relative;
    padding :10px ;
    list-style: none;
  
  
    
    
    a{
        color: var(--back-titlePrimary);
        text-decoration: none;
        font-family: var(--font-popis);
        font-weight: bold;
        font-size: 17px;
        transition: 0.2s ease-in-out;
        padding: 10px;
        text-transform: uppercase;
        
    }
    li:hover{
    color: white;

}
}
li ~li::before{

content: '';
position: absolute;

width: 0%;
height: 2px;
bottom: 0;
left:0;
transform: translateY(50%);

transition: 0.5s ease-in-out;
}


a:hover{
color: white;

}
li:hover::before{
    background-color: var(--back-titlePrimary);
    transform:  width 0.3s ease;
    width: 100%;
}


`

export const Profile = styled.div`
font-size: 25px;
color: var(--back-titlePrimary);


`

