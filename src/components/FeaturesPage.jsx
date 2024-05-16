import React from 'react'

const Features = () => {
    return (
        <div className="sub-home grid grid-cols-4 w-full h-[130vh] font-mono">

            <div className="card1 h-full">
                <div className="top1 w-[100%] h-[70%] p-5">
                    <h1 className=' text-2xl  text-center'>Convert with email automations</h1>
                </div>
                <div className="w-full h-[30%] down flex flex-col justify-center  bg-[#D99536] p-4">
                    <p className='text-[1.2rem] mt-[1rem]'>Boost orders and customer lifetime value by dynamically personalizing emails based on browsing and purchase data.</p>
                    <button className='mx-[1rem] my-[1rem] border-2 border-black rounded-[4rem] h-[3rem] w-[15rem] text-[0.9rem]'>Explore mareketing automation</button>
                </div>
            </div>
            <div className="card1 h-full">
                <div className="top2 w-full h-[70%] p-5">
                    <h1 className=' text-2xl  text-center '>Create faster with generativ AI</h1>
                </div>
                <div className="w-full h-[30%] down flex flex-col justify-center  p-4">
                    <p className='text-[1.2rem] mt-[1rem]'>Effortlessly create on-brand content with generative AI tools and choose from expertly designed templates.</p>
                    <button className='mx-[1rem] my-[1rem] border-2 border-black rounded-[4rem] h-[3rem] w-[10rem] text-[0.9rem]'>Explore AI tools</button>
                </div>
            </div>
            <div className="card1 h-full ">
                <div className="top3 w-full h-[70%] p-5">
                    <h1 className=' text-2xl  text-center '>Refine with Segmentation</h1>
                </div>
                <div className="w-full h-[30%] down flex flex-col justify-center  bg-[#E7B75F] p-4">
                    <p className='text-[1.2rem] mt-[1rem]'>Target customers with advanced logic like spend amounts, buying behavior, and predicted attributes.</p>
                    <button className='mx-[1rem] my-[1rem] border-2 border-black rounded-[4rem] h-[3rem] w-[15rem] text-[0.9rem]'>Explore audience management</button>
                </div>
            </div>
            <div className="card1 h-full ">
                <div className="top4 w-full h-[70%] p-5">
                    <h1 className=' text-2xl  text-center '>Optimize withanalytics and reporting</h1>
                </div>
                <div className="w-full h-[30%] down flex flex-col justify-center  bg-[#FBEECA] p-4">
                    <p className='text-[1.2rem] mt-[1rem]'>Analyze performance with custom reports, funnel visualizations, and industry benchmarking.</p>
                    <button className='mx-[1rem] my-[1rem] border-2 border-black rounded-[4rem] h-[3rem] w-[15rem] text-[0.9rem]'>Explore analytics & reporting</button>
                </div>
            </div>
        </div>
    )
}

export default Features
