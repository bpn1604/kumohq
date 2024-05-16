import React from 'react'

const Heading = (props) => {
    return (
        <div className="component-5 my-[2rem] h-[20vh] w-[50%] mx-auto text-4xl text-center font-regular">
            {props.message}
        </div>
    )
}

export default Heading
