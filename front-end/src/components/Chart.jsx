
import React, { useState } from 'react';

import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';

export default function Charts() {

    const [queryItem, setQueryItem] = useState('');
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
    ];

    const customColors = ['#000000', '#808080']; 
    const textColor = ['#ffffff'];
    const postData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName
          
        }).then(() => {
            //
        })
    }
    return (
        <div className='main-content'>
            <form className="search-form">
                <h1>Price Increase</h1>
                
                    <input className ="search-input"placeholder='Enter product to compare' onChange={(e) => setQueryItem(e.target.value)}/>
                <br/>
                <br/>
                <button onClick={postData} type='submit'>Search</button>
            </form>
            <br></br>
            <BarChart 
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId'},
        { data: uData, label: 'uv', id: 'uvId' }
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      colors={customColors}
                />
        </div>
    )
}