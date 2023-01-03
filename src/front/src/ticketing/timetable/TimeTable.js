import React, {useEffect, useState} from 'react';
import './TimeTable.css';
import axios from "axios";





const TimeTable = (props) => {

    const {st}=props;
    const [table,setTable]= useState([])
    const {input, setInput, changeData}=props;


    const day=input.calender;
    const mv=JSON.stringify(input.movie);
    const location= JSON.stringify(input.location);


    const loc=location.substring(17,18);
    const mvpk=mv.substring(15,21);

    useEffect(()=>{
        get();
    },[st])

    const get=()=>{
        if (mvpk.length ===0 || loc.length ===0 || day.length ===0)
        {
            return;
        }

        axios.get(`http://localhost:8282/screentime/screen_times?movie=${mvpk}&theater=${loc}&date=${day}`)
            .then((response) =>{
                setTable(response.data);

            });
    }



    return (
        <div>


            {
                table &&
                input.location !== "" && input.movie !== "" && table.length === 0 ?
                    <div style={{
                        width: '43%',
                        fontSize: '20px',
                        margin: 'auto',
                        alignItems: 'center',
                        display: 'flex',
                        marginTop: '35%'
                    }}>해당 날짜에 상영중인 영화가 존재하지 않습니다</div>

                    :

                    table.map((list, i) => (
                        <ul key={i}>
                            <li style={{listStyle: 'none'}}>
                                <button className={'ttt'} key={i} name={'time'} value={JSON.stringify(list)}
                                        onClick={changeData}
                                        style={{
                                    fontSize: '15px',
                                    border: '1px solid lightgray',
                                    height: '50%',
                                    width:'30%',
                                    justifyContent: 'center',
                                    float:'left',
                                    margin:'5px',
                                    marginTop:'6%',
                                            borderRadius: '20px'

                                }}

                                >
                                    <span className={'showhide'}>종료 {list.scrt_etime.substring(0, 5)}</span>
                                        {list.scr_floor} {list.scr_name}<br/>


                                    {list.scrt_stime.substring(0, 5)}
                                    <br/>


                                        {list.booked}/{list.scr_tot_seat}
                                </button>

                            </li>
                        </ul>
                    ))
            }


        </div>
    );
};

export default TimeTable;