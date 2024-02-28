
import React, { useState } from 'react';

import axios from 'axios';

export default function Budget() {

    const [queryItem, setQueryItem] = useState('');

  
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
                <h1>Budget</h1>
                
                    <input className ="search-input"placeholder='Enter product to compare' onChange={(e) => setQueryItem(e.target.value)}/>
                <br/>
                <br/>
                <button onClick={postData} type='submit'>Search</button>
            </form>
        </div>
    )
}