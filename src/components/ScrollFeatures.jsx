import React from 'react'

const ScrollFeatures = ({ firstdetails }) => {
    
    return (
        <div class="section second w-full  flex gap-2 items-start relative">
            <div class="left mt-[3rem] sticky top-[6rem] left-0 w-[50%]  bg-[#EFEEEA]">
                <img src="./2image.png" className='mx-auto my-[3rem]' alt="" />
            </div>
            <div class="right w-[50%]">
                {
                    firstdetails.map((e) => (
                        <div className="one font-mono gap-6 mt-[10rem] flex flex-col p-[3rem] h-[70vh] w-[70%] ml-[3rem] items-start">
                            <h1 className='text-3xl'>{e.heading}</h1>
                            <p>{e.subheading}</p>
                            <div>Learn More</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ScrollFeatures
