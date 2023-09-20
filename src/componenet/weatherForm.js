import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
// weather of info componenet
export default function WeatherForm(props) {
  const nav=useNavigate();
  const inputRef=useRef();
  const onSearch=()=>{
    nav("/?q="+inputRef.current.value);
    // window.alert(inputRef.current.value);
    // props.doApi(inputRef.current.value);
    inputRef.current.value="";
  }
  return (
    <nav className='container-fluid bg-warning p-2'>
    <div className='container'>
        <div className='row'>
            <div className='logo col-auto text-light'>
                <h2>app-weather</h2>
            </div>
            <div className='d-flex col-md-5'>
                <input onKeyDown={(e)=>{
                  if (e.key=="Enter") {
                    onSearch();//call the function
                  }
                }} ref={inputRef} className='form-control' id='id_input' placeholder='search for town' type='search'></input>
                <button onClick={onSearch} id='search_btn' className='btn btn-info'>search</button>
            </div>
        </div>
    </div>
    </nav>
  )
}
