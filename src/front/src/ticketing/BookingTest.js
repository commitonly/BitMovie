import React, {useState} from 'react';
import axios from "axios";

//테스트코드

function BookingTest(props) {
    const [movie,setMovie] = useState('');

    const onClickMovie=(e)=>{
        let url = process.env.REACT_APP_URL;
        setMovie(e.target.value);
        axios.get(url+"/screentime/test?movie="+movie)
            .then(res=>{
                alert(res.data);
            })
    }

    return (
        <div>
            <button value={1} onClick={onClickMovie}>블랙팬서</button>
        </div>
    );
}

export default BookingTest;