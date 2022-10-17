import React,{useState} from "react";
import SaudeOne from "../Figures/Saude1.png"
import SaudeTwo from "../Figures/Saude2.png"
import EducacaoOne from "../Figures/Educacao1.png"
import EducacaoTwo from "../Figures/Educacao2.png"
import AguaOne from "../Figures/agua1.png"
import AguaTwo from "../Figures/Agua2.png"
import TrabalhoOne from "../Figures/trabalho1.png"
import TrabalhoTwo from "../Figures/trabalho2.png"
import * as S from "../Styles/ODS-Styles"
const ODS =()=>{
    
    const [openOne,setOpenOne]=useState(false);  
    const [openTwo,setOpenTwo]=useState(false);  
    const [openThree,setOpenThree]=useState(false);  
    const [openFour,setOpenFour]=useState(false);  
    const ChangeOne = ()=>{
          setOpenOne(!openOne);
          setOpenTwo(false);
          setOpenThree(false);
          setOpenFour(false);
    };
    const ChangeTwo = ()=>{
        setOpenOne(false);
        setOpenThree(false);
          setOpenFour(false);
        setOpenTwo(!openTwo);
  };
  const ChangeThree = ()=>{
    setOpenOne(false);
    setOpenTwo(false);
  
    setOpenFour(false);
    setOpenThree(!openThree);
};
const ChangeFour = ()=>{
    setOpenOne(false);
    setOpenTwo(false);
    setOpenThree(false);
   
    setOpenFour(!openFour);
};
    return(
              <S.BODY>
                     <h1>Os Objetivos de Desenvolvimento Sustentável em Barra Mansa</h1>
                      <S.DIV>
                      <S.IMG onClick={()=>{ChangeOne()}} src={SaudeOne}/>
                      <S.IMG onClick={()=>{ChangeTwo()}} src={EducacaoOne}/>
                      <S.IMG onClick={()=>{ChangeThree()}} src={AguaOne}/>
                      <S.IMG onClick={()=>{ChangeFour()}} src={TrabalhoOne}/>
                      </S.DIV>
                  
               
               <S.DIVONE>
               {openOne && openTwo==false && openThree==false && openFour==false && (
                     
                           
                        <S.DIVTWO>
                            <div>
                              <button onClick={()=>{setOpenOne(false)}}>X</button>
                            </div>
                              <div>
                              <img src={SaudeTwo}/>
                             </div>   
                              
                            
                           
                        </S.DIVTWO>
                           
                     
               )}
               </S.DIVONE>
               
                  
               <S.DIVTHREE>
               {openTwo && openOne==false && openThree==false && openFour==false && (
                     
                           
                        <S.DIVTWO>
                            <div>
                              <button onClick={()=>{setOpenTwo(false)}}>X</button>
                            </div>
                              <div>
                              <img src={EducacaoTwo}/>
                             </div>   
                              
                            
                           
                        </S.DIVTWO>
                           
                     
               )}
               </S.DIVTHREE>
               
                        
               <S.DIVFOUR>
               {openThree && openOne==false && openTwo==false && openFour==false && (
                     
                           
                        <S.DIVTWO>
                            <div>
                              <button onClick={()=>{setOpenThree(false)}}>X</button>
                            </div>
                              <div>
                              <img src={AguaTwo}/>
                             </div>   
                              
                            
                           
                        </S.DIVTWO>
                           
                     
               )}
               </S.DIVFOUR>
               <S.DIVFIVE>
               {openFour && openOne==false && openTwo==false && openThree==false && (
                     
                           
                        <S.DIVTWO>
                            <div>
                              <button onClick={()=>{setOpenFour(false)}}>X</button>
                            </div>
                              <div>
                              <img src={TrabalhoTwo}/>
                             </div>   
                              
                            
                           
                        </S.DIVTWO>
                           
                     
               )}
               </S.DIVFIVE>
              </S.BODY>
            
                 
                
        
               
                
 
       );
 
 };
 
 export default ODS;