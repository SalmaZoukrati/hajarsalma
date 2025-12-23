import React from "react";
import ReactDOM, { createRoot } from 'react-dom/client';
function getAge(dateNaissance){
let from = dateNaissance.split("/");
let birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
let cur = new Date();
let diff = cur - birthdateTimeStamp;
let currentAge = Math.floor(diff/31557600000);
 return currentAge;}

function App2(){
    const info={nom:'rami',prenom:'mohamed',datenaissance:"23/03/2003"}
    const years= getAge(info.datenaissance);
    return(
        <div>
            <h2>Informations</h2>
            <p>{info} votre age est:{years}</p>



        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('1'));
root.render((<App2/>));