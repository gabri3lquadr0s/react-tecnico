import { useState } from 'react'
import '../css/flexbox.css'

export default function Flexbox() {
    return(
        <>
        <div className='center'> 
            <h1>FlexBox and Media Query Exercise</h1>
            <div className='container'>
                <div className='item1 item'>
                    <h1>this is item 1</h1>
                </div>
                <div className='item2 item'>
                    <h1>this is item 2</h1>
                </div>
                <div className='item3 item'>
                    <h1>this is item 3</h1>
                </div>
            </div>
        </div>
        </>
    )
}