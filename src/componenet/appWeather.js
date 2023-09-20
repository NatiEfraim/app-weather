import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import WeatherForm from './weatherForm'
import WeatherInfo from './weatherInfo'
import axios from 'axios';

export default function AppWeather() {
    const  [info,setInfo]=useState({});
    const [query]=useSearchParams();
    useEffect(()=>{
        doApi(query.get("q"));
    },[query])
    const doApi=async(_town)=>{
        try {
            let url=`
            https://api.openweathermap.org/data/2.5/weather?q=${_town}&APPID=0f2c120bb428e0938778e359dbd8b629&unites=metric
            `
            let resp=await axios.get(url);
            // console.log(resp.data);
            // up data the info
            setInfo(resp.data);
            console.log(resp.data);
            console.log(info);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <React.Fragment>
        {/* call the componenet */}
        <WeatherForm doApi={doApi}></WeatherForm>
        {/* <h4>{query.get("q")}</h4> */}
        {info.name && <WeatherInfo info={info}/>}
       
    </React.Fragment>
  )
}
