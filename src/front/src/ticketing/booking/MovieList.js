import React, {useState, useEffect} from 'react';
import './MovieList.css'
import axios from "axios";
import Age from "../../service/Age";
import {CircularProgress} from "@mui/material";

const MovieList = (props) => {

    const {input,setInput,changeData,get2,get3,mvlist,setMvlist}=props;
    const [loading,setLoading]=useState(true);
    const [color, setColor] = useState("");

    const get=()=>{
        setLoading(true);
        axios.get('http://localhost:8282/booking/screening_list?BorA=after')
            .then((response) =>{
                setMvlist(response.data);
                setLoading(false);
            });
    }



    useEffect(()=>{

        get();


    },[]);


    const onChangeTitleBg = (list) => {

        setColor(list);
        if (list === color)

            setColor("");



    };





    return (


        <div>

            <div className={'mvcolor'}>

                {
                    loading ?
                        <div style={{display:"flex",justifyContent:"center",alignItems:'center', height:'400px'}}>
                            <CircularProgress color={"inherit"}/>
                        </div>
                        :
                        mvlist.map((list, i) => (
                            <ul key={i} style={{paddingLeft: '15px', marginBottom: '5px'}}>
                                <li style={{listStyle: 'none', width: '400px', wordBreak: 'break-all'}}>


                                    <button className={
                                        color === list ? "select-clicked" : "select-default"
                                    } key={i} style={{fontSize: '15px'}}
                                            onClick={(e)=>{

                                                onChangeTitleBg(list)
                                                changeData(e)}

                                            }

                                            value={JSON.stringify(list)} name={'movie'}>
                                        <Age age={list.m_age_grd} size={20}/>&nbsp;
                                        <div style={{width: '200px'}} className={'txt'}>&nbsp;{list.m_name}</div>
                                    </button>

                                </li>
                            </ul>
                        ))
                }
            </div>

        </div>
    );
};

export default MovieList;