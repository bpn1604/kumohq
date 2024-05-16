import React from 'react'

const HorizontalScroll = ({ firstdetails }) => {
    return (
        <>
            {
                firstdetails.map((e) => (

                    <div class="section second w-full  flex flex-col gap-2 items-start relative">
                        <div class="left mt-[3rem] mx-auto w-[80%]  bg-[#EFEEEA]">
                            <img src={e.src} className='mx-auto my-[3rem]' alt="" />
                        </div>
                        <div class="right mx-auto w-[80%]">
                            <div className="one font-mono gap-6 flex flex-col  h-[40vh] w-[100%] mt-[3rem] items-start">
                                <h1 className='text-3xl'>{e.heading}</h1>
                                <p>{e.subheading}</p>
                                <div>Learn More</div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>

    )
}

export default HorizontalScroll
