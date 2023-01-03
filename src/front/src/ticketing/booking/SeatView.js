import {json, Link, useLocation, useNavigate} from "react-router-dom";

import './SelectSeat.css';
import React, {useCallback, useEffect, useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Age from "../../service/Age";
export default function SeatView({people, seats, rowSeats, onClickPeople,input ,setInput,changeData }) {

    const navi=useNavigate();
    const location = useLocation();
    const [coupon,setCoupon]=useState('');
    const movieData= location.state.input;
    const [totalp, setTotalp] =useState(0);
    const [adults, setAdults]= useState(0);
    const [students, setStudents]= useState(0);
    const [selected_seat, setSelected_seat]=useState([]);
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const [aprice,setAprice]=useState(0);
    const [sprice,setSprice]=useState(0);
    const [finalPay,setFinalPay]=useState(0);
    const [bookedSeat,setBookedSeat]=useState("");




    const reset=()=>{

        Swal.fire({
            title: '좌석 재선택',
            text: "선택된 좌석이 사라집니다",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '좌석취소완료',
                    '선택 좌석 취소완료',
                    'success'
                )
                    .then((res)=>{
                        window.location.reload();
                    })
            }
        })


    }


    const obj = JSON.parse(movieData.movie);
    const obj2 = JSON.parse(movieData.location);
    const obj3 = JSON.parse(movieData.time);


    const saveGo=() => {
        if (totalp===selected_seat.length && selected_seat.length!==0) {

            const totalPrice = (sprice * 8000) + (aprice * 10000);

            navi('/ticketing/payment', {
                state: {obj, obj2, obj3, adults, students, selected_seat, finalPay: totalPrice, movieData, coupon}
            })

            if (obj.m_age_grd >= 18) {
                Swal.fire({
                    icon: "warning",
                    text: "[청소년관람불가] 입장 전 신분증 확인 후 입장가능합니다"



                })

            }



        }else {
            Swal.fire({
                icon: "warning",
                text: "선택한 인원을 확인해주세요"
            })
        }
    }



    //쿠폰 받아오기
    const getCoupon=()=> {
        let user_pk=sessionStorage.user_pk;
        axios.get(`http://localhost:8282/payment/coupon?user_pk=${user_pk}`)
            .then((res) => {
                setCoupon(res.data);
            }).catch((error) => {
        });
    }





    //성인

    const handleOnchangePerson = (e) => {

        const value = e.value;
        const adults = e.target.value;


        document.getElementById('result').innerText = e.target.value;
        setTotalp(parseInt(e.target.value) + parseInt(document.getElementById('student_select').value));
        // setAdults(parseInt(e.target.value) + parseInt(document.getElementById('adult_select').value));
        setAdults(parseInt(document.getElementById('adult_select').value));

        setAprice(parseInt(document.getElementById('adult_select').value));



    }


    //학생

    const handleOnchangePerson2 = (e) => {
        const value = e.value;
        const students = e.target.value;


        document.getElementById('result2').innerText = e.target.value;
        setTotalp(parseInt(e.target.value) + parseInt(document.getElementById('adult_select').value));
        // setStudents(parseInt(e.target.value) + parseInt(document.getElementById('student_select').value));
        setStudents(parseInt(document.getElementById('student_select').value));
        setSprice(parseInt(document.getElementById('student_select').value));
    }

    useEffect(()=>{

        take();
        getCoupon();


    },[])

    const take=()=> {
        axios.get(`http://localhost:8282/booking/reserved_seat?screentime=${obj3.scrtime_pk}`)
            .then((res) => {
                setBookedSeat(res.data);
            }).catch((error) => {
        });
    }





    const [tg,setTg]= useState(null);

    const changeHandler = (e,i) => {

        setTg(e.target);
        if (e.target.checked) {
            setSelected_seat([...selected_seat, e.target.value]);
        } else {
            // 체크 해제
            setSelected_seat(selected_seat.filter((a) => a !== e.target.value));
        }

    };

    useEffect(()=>{


        if (selected_seat.length > totalp ) {
            Swal.fire({
                icon: "warning",
                text: "인원 확인 부탁드립니다"
            })
            tg.checked=false;
            setSelected_seat([
                ...selected_seat.slice(0,selected_seat.length-1)
            ])
        }
    },[selected_seat]);
    return (
        <div className={'seatchoose'}>

            <section className={'member'}>
                <b className={'infos'} style={{fontSize:'20px', color:'white'}}>인원 및 좌석선택</b><br/>
                <label>성인</label>&nbsp;
                <select className={'ad'} name={'adult'} id={"adult_select"} defaultValue={0} onChange={handleOnchangePerson}>
                    <option value="0">0명</option>
                    <option value="1">1명</option>
                    <option value="2">2명</option>
                    <option value="3">3명</option>
                    <option value="4">4명</option>
                    <option value="5">5명</option>
                    <option value="6">6명</option>
                </select>
                &nbsp;
                <label>청소년</label>&nbsp;
                <select className={'st'} name={'child'} id={"student_select"} defaultValue={0} onChange={handleOnchangePerson2}>
                    <option value="0">0명</option>
                    <option value="1">1명</option>
                    <option value="2">2명</option>
                    <option value="3">3명</option>
                    <option value="4">4명</option>
                    <option value="5">5명</option>
                    <option value="6">6명</option>
                </select>
            </section>
            <div>

            </div>
            <br/>



            <main className={'allboxes'}>

                <article id="info-container">

                    <img alt={obj.m_name} src={`https://image.tmdb.org/t/p/w500${obj.m_photo}`} className={'seatposter'} />

                    <div className={'seattx'}>
                        <p style={{fontSize:'20px'}}><Age  age={obj.m_age_grd} size={20}/>&nbsp;{obj.m_name}</p>

                        <p><b style={{fontSize:'20px'}}>상영 지점</b> {obj2.the_name}</p>
                        <p><b style={{fontSize:'20px'}}>예매 날짜</b> {movieData.calender}</p>
                        <p><b style={{fontSize:'20px'}}>러닝 타임</b> {obj3.scrt_stime.substring(0,5)}~{obj3.scrt_etime.substring(0,5)}</p>
                        <p><b style={{fontSize:'20px'}}>선택 인원</b> 성인 :  <span id={'result'}></span>&nbsp;청소년 : <span id={'result2'}></span></p>
                        <p><b style={{fontSize:'20px'}}>선택 좌석</b> <span id={'result3'} >{[...selected_seat.join(",")]}</span> </p>
                        <p id="selected-seats"></p>
                    </div>
                </article>




                <article className="seat-section">

                    <div className="screen"></div>
                    <div className={'seatboxes'}>
                        {rowSeats.map((list, i) => (
                            <label htmlFor={'seat'} key={i}>
                                <li  style={{listStyle:'none', width:0, float:'left', marginRight:'20px', marginTop:'13px', marginLeft:0, color:'silver'}} >{alphabet[i].toUpperCase().toString()}</li>
                                {seats.map((list,j) => (
                                    <input type={"checkbox"}
                                           disabled={bookedSeat.includes(alphabet[i].toUpperCase()+(j+1).toString())}
                                           className={'seat'}
                                           key={j}
                                           value={alphabet[i].toUpperCase()+(j+1).toString()}
                                           name={'seat'} id={"seat_select"}
                                           onChange = {changeHandler}

                                    />


                                ))}


                            </label>
                        ))}
                    </div>
                </article>
                <ul className="showcase">
                    <li>
                        <div className="seat okay"></div>
                        <small>예매가능</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>선택좌석</small>
                    </li>
                    <li>
                        <div className="seat occupied"></div>
                        <small>예매완료</small>
                    </li>
                </ul>
            </main>


            <div id={'btns'}>
                <button id="reset-btn" onClick={reset}>다시선택</button>
                <button id="reset-btn2" onClick={saveGo}>선택완료</button>
            </div>
        </div>
    );
}
