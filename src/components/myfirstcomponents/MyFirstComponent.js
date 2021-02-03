import React from 'react'
import './MyFirstComponent.css'

export const MyFirstComponent = (props) => {
    return(
        <>
        <h1 className="title">Hi {props.name} you are {props.age} years old</h1>
        </>
    )
}