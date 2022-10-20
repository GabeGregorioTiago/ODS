import React,{useState} from "react";
import CidadeOne from "../Figures/Cidades1.png"
import CidadeTwo from "../Figures/CIdades2.png"
import IgualdadeOne from "../Figures/Igualdade1.png"
import IgualdadeTwo from "../Figures/Igualdade2.png"

import * as S from "../Styles/ODS-Styles"
const ODS =()=>{
    
    const [openOne,setOpenOne]=useState(false);  
    const [openTwo,setOpenTwo]=useState(false);  
    const [openThree,setOpenThree]=useState(false);  
    const [openFour,setOpenFour]=useState(false);  
    const ChangeOne = ()=>{
          setOpenOne(!openOne);
          setOpenTwo(false);
         
    };
    const ChangeTwo = ()=>{
        setOpenOne(false);
       
        setOpenTwo(!openTwo);
  };
 
    return(
              <S.BODY>
                     <h1>Os Objetivos de Desenvolvimento Sustentável em Barra Mansa</h1>
                      <S.DIV>
                      <S.IMG onClick={()=>{ChangeOne()}} src={IgualdadeOne}/>
                      <S.IMG onClick={()=>{ChangeTwo()}} src={CidadeOne}/>
                      
                      </S.DIV>
                  
               
               <S.DIVONE>
               {openOne && openTwo==false  && (
                     
                           
                        <S.DIVTWO>
                            <div>
                              <button onClick={()=>{setOpenOne(false)}}>X</button>
                            </div>
                              <div>
                              <img src={IgualdadeTwo}/>
                             </div>   
                              <S.DIVFOUR>
                                 <h3>Objetivo 10. Reduzir a desigualdade dentro dos países e entre eles</h3>
                                 <p>Barra Mansa assina o Pacto de Combate ao Racismo e Promoção da Igualdade Racial.    <a href="https://www.barramansa.rj.gov.br/barra-mansa-assina-o-pacto-de-combate-ao-racismo-e-promocao-da-igualdade-racial/">Saiba mais aqui!</a></p>
                                
                                 
                              </S.DIVFOUR>
                            
                           
                        </S.DIVTWO>
                           
                     
               )}
               </S.DIVONE>
               
                  
               <S.DIVTHREE>
               {openTwo && openOne==false  && (
                     
                           
                        <S.DIVTWO>
                            <div>
                              <button onClick={()=>{setOpenTwo(false)}}>X</button>
                            </div>
                              <div>
                              <img src={CidadeTwo}/>
                             </div>   
                              
                            
                             <S.DIVFOUR>
                                 <h3>Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis</h3>
                                 <p>Sesc Barra Mansa recebe atividades certificadas pela ONU Habitats <a href="https://avozdacidade.com/wp/sesc-barra-mansa-recebe-atividades-certificadas-pela-onu-habitats/">Saiba mais aqui!</a></p>
                                
                                 
                              </S.DIVFOUR>
                            
                        </S.DIVTWO>
                           
                     
               )}
               </S.DIVTHREE>
               
                        
             
              </S.BODY>
            
                 
                
        
               
                
 
       );
 
 };
 
 export default ODS;