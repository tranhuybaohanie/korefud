// import React,{component} from 'react';
import {config} from '../Config/config'
const apiGetAllFood =config.apiLocation;



// async function GetAllFood() {
//     try {
//         let response =await fetch(apiGetAllFood);
//         let responseJson = await response.json();
//         return responseJson.data;
//     }catch(e){
//         alert("cannot fetch all food:"+e);
//     }
// }

 

import axios from 'axios';
import * as Config from './../Constants/Config';



export default function GetAllFood(endpoint, method ='GET',bodyData){
    return axios({
        method:method,
        url:apiGetAllFood,
        data: bodyData

    }).catch((e)=>{
        console.log('APICALLER: '+e+' '+e.status);
    });
}
export {GetAllFood}