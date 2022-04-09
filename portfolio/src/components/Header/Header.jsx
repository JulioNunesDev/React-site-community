import { Header } from "./styHeader";
import { Navigate } from "./styHeader";
import { Lista } from "./styHeader";
import {FaUserPlus} from 'react-icons/fa'
import { Profile } from "./styHeader";


const HeaderB = () => {
    return ( 
        <Header> 
           
            <Navigate> 
               
                <Lista>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Git</a></li>
                    <li><a href="">Skills</a></li>
                </Lista>
                <Profile>
                <FaUserPlus/>
                </Profile>
            </Navigate>
        </Header>

    );
}
 
export default HeaderB;