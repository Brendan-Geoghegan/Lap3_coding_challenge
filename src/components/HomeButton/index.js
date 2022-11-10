import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../../assets/github.png";

export default function HomeButton() {
    return (
        <>
            <button>
                <Link to='/'>
                    <img src={image} id='homeButton' />
                </Link>
            </button>
        </>
    )
}
