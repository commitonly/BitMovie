import React, {useState, useEffect} from 'react';
import './MovieList.css'
import axios from "axios";
import Age from "../../service/Age";

const MovieList = (props) => {

    const {input,setInput,changeData}=props;


    const [mvlist,setMvlist] = useState([]);

    const get=()=>{
        axios.get('http://localhost:8282/booking/screening_list')
            .then((response) =>{
                setMvlist(response.data);
                console.log('보자',response.data);

            });
    }

    useEffect(()=>{

        get();

    },[]);


    return (


        <div>

            <div className={'mvcolor'}>
                {mvlist.map((list,i)=>(
                    <ul key={i}>
                        <li style={{listStyle:'none'}}>

                                {/*<img src={age} style={{width:'30px', float:'left'}}/>*/}
                            <Age age={list.m_age_grd} size={20}/>
                            <button className={'mvbtn'} key={i} style={{fontSize:'15px'}} value={JSON.stringify(list)} name={'movie'} onClick={changeData} >
                        <span className={'txt'}>{list.m_name}</span>

                    </button>
                        </li>
                    </ul>
                ))}
            </div>

        </div>
    );
};

export default MovieList;