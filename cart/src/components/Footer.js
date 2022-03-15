import React from 'react'

export default function Footer(props) {
    return (
        <div className='row'>
            <button className='btn btn-danger col-2'>Reset</button>
            <div className='col-8'>
                {props.totalAmount}
            </div>
            <button className='btn btn-primary col-2'>Pay Now</button>
        </div>
    )
}
