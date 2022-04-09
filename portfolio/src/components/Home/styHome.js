import styled from "styled-components";
import logo from './projeto.png'

export const BoxHomeContainer = styled.section`
height: 2500px;
width: 100%;



`

export const HomePageHome = styled.div`
background-color: #0d0d0d;
display: flex;
flex-wrap: wrap;
align-items: center;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='300' preserveAspectRatio='none' viewBox='0 0 1440 400'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1193%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c101 C 48%2c88.6 144%2c20.8 240%2c39 C 336%2c57.2 384%2c188.6 480%2c192 C 576%2c195.4 624%2c63.8 720%2c56 C 816%2c48.2 864%2c158.2 960%2c153 C 1056%2c147.8 1104%2c37.8 1200%2c30 C 1296%2c22.2 1392%2c97.2 1440%2c114L1440 400L0 400z' fill='rgba(250%2c 250%2c 250%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c357 C 36%2c330.2 108%2c228.8 180%2c223 C 252%2c217.2 288%2c321.4 360%2c328 C 432%2c334.6 468%2c254 540%2c256 C 612%2c258 648%2c334.6 720%2c338 C 792%2c341.4 828%2c276.4 900%2c273 C 972%2c269.6 1008%2c328.6 1080%2c321 C 1152%2c313.4 1188%2c238 1260%2c235 C 1332%2c232 1404%2c291.8 1440%2c306L1440 400L0 400z' fill='rgba(103%2c 58%2c 183%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1193'%3e%3crect width='1440' height='400' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
background-size: contain;
height: 800px;
background-repeat: no-repeat;
background-position: bottom;
 






.profile_info_img{
flex: 1.5;
display: flex;
justify-content: center; 
padding-bottom: 120px;
margin-left: 20px;

div{
    margin-left: 105px;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    background-color: #000000;
    display: flex;
    justify-content: center;
   
    border: 10px solid var(--back-titlePrimary);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
       
        
    }
}
}

.profile_info_title{
flex: 2;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 120px;

div{
  
    width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
 
h1{
    position: relative;
font-size: 65px;

color: white;
font-family: var(--font-bebas);
filter: drop-shadow(2px -5px 1px rgba(125,44,255));

}

}
}

`


export const HomeCriativo = styled.section`

flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 100%;
height: 2100px;
background-image: linear-gradient(to bottom, var(--back-titlePrimary), #000000);


.title-criativo{
    font-size: 48px;
    font-family: var(--font-noto);
    font-weight: bold;
    color: #fafafa;
    margin-bottom: 65px;
    
}

`

export const CriativoInfos = styled.div`
margin:  0 auto;
width: 98%;
height: 500px;
display: flex;
border-radius: 8px;
flex-wrap: wrap;
align-items: center;
background-color: var(--background-div1);


.titles-criativo{
flex: 1;
width: 480px;
height: 400px;
text-align: center;
margin: 0 auto;


.hs-criativo{
    width: 100%;
    h1{
font-size: 39px;
font-weight: bold;
padding-left: 25px;
font-family: var(--font-noto);
color: #fafafa;
line-height: 45px;

}
h2{
color: var(--back-subTitle);
font-size: 22px;
padding-top: 19px;
padding-left: 20px;
font-family: var(--font-noto);
}
}



.p-criativo{
    justify-content: center;
   display: flex;
   flex-wrap: wrap;
    width: 350px;
    height: 250px;
    text-indent: 10px;
    padding-left: 10px;
   margin: 0 auto;
   text-align: justify;
   text-justify: inter-word;
   word-break: break-all;
   align-items: center;
    
   

    p{

        color: var(--back-subTitle);
        font-family: var(--font-noto);
        font-size: 20px;
    
        
    }
}

}
.img-criativo{
    flex: 1;
    width: 300px;
    background-size: 100%;
    background-position:center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 2px;


    img{
     width  :500px;
     height: 90%;
     object-fit: contain;
    }

}
`

export const HomeCommunity = styled.section`

width: 100%;
height: auto;
margin: 100px 0px;
display: flex;
justify-content: center;
align-items: center;


`

export const DivCommunity = styled.div`

    border-radius: 8px;
    width: 98%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 50px;
    
    

   

    


    .community-img{
        width: 100%;
        height: 100%;
        flex:1;

        img{
            width: 500px;
            height:500px;
            object-fit: contain;
            filter: drop-shadow(1px 1px 1px white);
        }
    }

    .titles-community{
        width: 200px;
        height: 100%;
        flex: 1;
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding-top: 50px;
        



        .hs-community{
        
            width: 290px;
            word-wrap: break-word;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            margin-bottom: 25px;
            text-align: center;

            

         h1{
          font-size: 39px;
        font-weight: bold;
        font-family: var(--font-noto);
        color: #fafafa;
        line-height: 45px;
        }

        h2{
        color: var(--back-subTitle);
        font-size: 22px;
        padding-top: 19px;
        padding-left: 20px;
        font-family: var(--font-noto);
        }
        }
        .p-community{
            display: flex;
            align-items: center;
            width: 350px;
            height: 200px;
            text-indent: 10px;
            text-align: justify;
            text-justify: inter-word;
          


            p{
                color: var(--back-subTitle);
                font-family: var(--font-noto);
                font-size: 20px;
               
               
            }
        }
    }
    
`

export const HomeMembros = styled.section`
margin-top: 0px;
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;


h1{
    font-size: 39px;
    color: #fafafa;
    font-family: var(--font-noto);
    padding-top: 55px;
    margin-bottom: 55px;
}

`


export const DivMembros = styled.div`
width: 98%;
background-color:var(--font-color);
border-radius: 8px;
height: 600px ;




`

export const DivMembrosInfos = styled.div`
width: 100%;
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
height:350px;



.membros-profiles{
    width: 280px;
   height: auto;
    position: relative;
  
    

.img-profile-capa{
    width:auto;
    height: 105px;
    margin: 0;
    position: relative;
    border-radius: 8px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;


    }
}

.img-profile-perfil{
    width: 55px;
    height: 55px;
    border: 3px solid #fafafa;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    bottom: -20px;
    z-index: 10;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;

    }
}


.titles-profile{
background-color: #fafafa;
width: 100%;
height: auto;
position: relative;



h2{
font-size: 25px;
font-family: var(--font-noto);
font-weight: bold;
text-align: left;
padding: 20px 0px 0px 8px ;
color:black;
margin-bottom: 15px;
}
span{
font-size: 40px;
position: absolute;
top: 5px;
right: 5px;
color: red;
}
.titles-dsc{
text-align: left;
padding-left: 8px;
width: 100%;
height: 85px our auto;
padding: 8px;
margin-bottom: 35px;
font-family: var(--font-noto);
}
.profile-stars{
    width: 100%;
    height: 100%;
    background-color: #0d0d0d;
    color: white;
    text-align: left;
    padding: 15px 0 15px 8px;
    margin-top: 15px;
    
    span:hover{
        color: #0d0d0d;
    }
   
}

}
}









`
