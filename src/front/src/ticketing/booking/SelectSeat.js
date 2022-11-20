// import React, {useEffect, useState} from 'react';
// import {useLocation} from "react-router-dom";
//
// const SelectSeat = () => {

    //
    // const location = useLocation();
    // console.log('state',location.state);
    //
    // const movieData= location.state.input;
    // console.log(movieData);
    //
    //
    // let allData=useLocation();
    // console.log(allData);
    //
    // return (
//         <div>
//             <span>영화 : {movieData.movie}</span>
//             <span>상영관 : {movieData.location}</span>
//             <span>날짜 : {movieData.calender}</span>
//             <span>시간 : {movieData.time}</span>
//         </div>
//     );
// };
//
// export default SelectSeat;













import React, { useState } from 'react';
import SeatView from './SeatView.js';
import './SelectSeat.css';
import {useLocation} from "react-router-dom";




const generateArray = (length) => Array.from({ length }, (_, i) => ({ id: i, selected: false }));







const MOVIES = [
    { label: '어벤져스', value: '10' },
    { label: '조커', value: '12' },
    { label: '토르', value: '8' },
    { label: '기생충', value: '15' },
];

export default function App(props) {
    const location = useLocation();
    console.log('state',location.state);

    const movieData= location.state.input;
    console.log(movieData);


    let allData=useLocation();
    console.log(allData);

    const [seats, setSeats] = useState(generateArray(8));
    const {input, setInput, changeData}=props;
    const [rowSeats, setRowSeats] = useState(generateArray(10));
    const [people, setPeople] = useState({
        ADULT: { array: generateArray(8), num: 0 },
        CHILD: { array: generateArray(8), num: 0 },





    });





    const onClickPeople = (id, type) => {
        const target = people[type].array.find(({ id: _id }) => id === _id);
        const notCurrentIdItem = people[type].array.filter(({ id: _id }) => id !== _id).map(({ id: _id }) => ({ id: _id, selected: false }));
        const array = [...notCurrentIdItem, { ...target, selected: true }].sort((a, b) => a.id - b.id);
        switch (type) {
            case 'ADULT': {
                setPeople(({ CHILD }) => ({ CHILD, ADULT: { array, num: id + 1 } }));
                break;
            }
            case 'CHILD': {
                setPeople(({ ADULT }) => ({ ADULT, CHILD: { array, num: id + 1 } }));
                break;
            }
        }
    };

    return <SeatView MOVIES={MOVIES} people={people} seats={seats} rowSeats={rowSeats} onClickPeople={onClickPeople} input={input} setInput={setInput} changeData={changeData} />;
}

