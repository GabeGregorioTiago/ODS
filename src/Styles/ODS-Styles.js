import styled from "styled-components";
export const BODY =styled.body`
border:solid transparent;
   height:100vh;

   h1{
    margin-left:30vh;
    margin-top:20vh;
   }
   @media  screen and (min-width: 360px) and (max-width: 480px){
       
       
      h1{ 
         margin:0;
         
         width:80vw;
         margin-left:6vh;
         margin-top:10vh;
     }
   }
`
export const IMG = styled.img`
width:15vw;
height:30vh;
@media  screen and (min-width: 360px) and (max-width: 480px){
   width:40vw;
   height:20vh;

}

`;

export const DIV = styled.div`
margin-top:5vh;
display:flex;
align-items: center;
justify-content: space-between;

width:35%;
margin-left:30vw;
@media  screen and (min-width: 360px) and (max-width: 480px){
   margin:0;
 
   width:90vw;
   margin-left:4vw;
   margin-top:10vh;
}

`;

export const DIVONE = styled.div`

margin-top:7vh;
width:100%;
height:30vh;


`;


export const DIVTWO = styled.div`
margin-top:-1vh;

   button{
     
       width:3vw;
       height:3vw;
       border-radius: 4vh;
       margin-left:93vw;
       background-color:transparent;
       
   }
   img{
    
     margin-left:12vw;
   }
   @media  screen and (min-width: 360px) and (max-width: 480px){
     
      img{
         display:none;
      }
      button{
         margin:0;
      
         width:20vw;
       height:20vw;
       border-radius:20vh;
       font-size:3vh;
       margin-left:70vw;
      }
   }
`;

export const DIVTHREE = styled.div`

margin-top:-30vh;
width:100%;
height:30vh;


`;

export const DIVFOUR = styled.div`
 
width:60vw;
height:20vh;
margin-left:20vw;
margin-top:10vh;

p{
   margin-top:5vh;
}
a{ 
  
   color:red;

}
@media  screen and (min-width: 360px) and (max-width: 480px){
   margin:0;

   width:90vw;
   height:30vh;
   margin-top:5vh;
   margin-left:4vw;
   h3{
      font-size:2.5vh;
   }
   p{
      font-size:2.5vh;
   }
}
`;