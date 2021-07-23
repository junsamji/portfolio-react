import React, { useState, useEffect } from 'react';
//비동기전송에 사용할 axios
import axios from 'axios';
//사용할 챠트들을 불러오기
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import './Covid.css';

const Covid = () => {
    //확진자 수 관리추가
    const [confirmedData, setConfirmedData] = useState({});
    //격리자 관리추가
    const [quarantinedData, setQuarantinedData] = useState({});
    //사망,격리,관리추가
    const [comparedData, setComparedData] = useState({});
    useEffect(() => {

        //비동기 전송
        const fetchEvents =  async() => {
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/KR");
            makeData(res.data);
        }
        
        const makeData = (items) => {
            // items.forEach(item => console.log(item)); 데이터확인용
            const arr = items.reduce((acc, cur) => {

                //currentDate에 cur의 날짜를 날짜형식으로 담는다.
                const currentDate = new Date(cur.Date);
                //년을 추출
                const year = currentDate.getFullYear();
                //월을 추출
                const month = currentDate.getMonth();
                //일을 추출
                const date = currentDate.getDate();
                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Deaths;
                const recovered = cur.Recovered;
                //들어있는지 안들어있는지 확인
                // 이전과 현재를 비교해서 year가 일치하고 month가일치하는지??
                const findItem = acc.find(a => a.year === year  && a.month === month);
                //일치하지 않으며 년도가 2021년이면 배열에 넣어주기
                //오브젝트 보낼때 키와벨루의 이름이 같으면 축약할 수 있음
                if(!findItem && year === 2021){
                    acc.push({year, month, date, confirmed, active, death });
                    console.log('넣어줌');
                }
                //이전과 날짜를 비교하여 현재날짜가 이전날짜보다 크면
                //현재데이터의 속성 값을  이전데이터의 속성값에 넣어줌
                if(findItem && findItem.date < date){
                    findItem.active = active;
                    findItem.death = death;
                    findItem.date = date;
                    findItem.year = year;
                    findItem.month = month;
                    findItem.recovered = recovered;
                    findItem.confirmed = confirmed;
                }
                return acc;
            },[])
            
            //배열만들기
            const labels = arr.map( a => `${a.month+1}월`);
            setConfirmedData({
                labels,
                datasets: [{
                    label: "국내 누적 확진자",
                    backgroundColor: "salmon",
                    fill: true,
                    data: arr.map(a=>a.confirmed)
                }]
                });
            
            setQuarantinedData({
            labels,
            datasets: [{
                label: "월별 격리자 현황",
                borderColor: "salmon",
                fill: false,
                data: arr.map(a=>a.active)
            }]
            });

            const last = arr[arr.length-1];
            setComparedData({
            labels: ["확진자","격리해제", "사망"],
            datasets: [{
                label: "누적 확진, 해제, 사망 비율",
                backgroundColor: ["#ff3d67","#059bff","#ffc233"],
                borderColor: ["#ff3d67","#059bff","#ffc233"],
                fill: false,
                data: [last.confirmed, last.recovered, last.death]
            }]
            });
            
        }
        fetchEvents();
    },[]);
    
    return (
        <section>
            <h2>국내 코로나 현황</h2>
            <div className="covid">
                <div>
                    <Bar data={confirmedData}  option={
                        {title: {display: true, text: "누적 확진자 추이", fontSize:16 }},
                        {legend: {
                            display: false,
                            position: 'bottom',
                        }}
                    } />
                </div>
                <div>
                    <Line data={quarantinedData}  option={
                        {title: {display: true, text: "월별 격리자 현황", fontSize:16 }},
                        {legend: {
                            display: false,
                            position: 'bottom',
                        }}
                    } />
                </div>
                <div>
                    <Doughnut data={comparedData}  option={
                        {title: {display: true, 
                                text: `누적 확진, 해제, 사망(${new Date().getMonth() + 1})`, 
                                fontSize:16 }},
                        {legend: {
                            display: false,
                            position: 'bottom',
                        }}
                    } />
                </div>
            </div>
        </section>
    )
}

export default Covid;