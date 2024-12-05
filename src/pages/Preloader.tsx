import { NavLink } from 'react-router-dom'

const Preloader = () => {
    return (
        <>
            <div className="flex items-center gap-5 justify-center flex-col mt-10">
              

                    <div className='flex flex-col items-center leading-none justify-center'>
                        <h2 className='text-[100px] font-bold'>1</h2>
                        <p className='text-gray-500'>Day in a row</p>
                    </div>
                


                <span className="user-name text-2xl font-medium mt-2 text-center">
                    Your rewards
                </span>

                <div className="flex items-center justify-center gap-2 px-3 py-2">
                    <div
                        className='bg-cover bg-center bg-no-repeat border border-gray-500 rounded-md px-5 py-2 flex items-center flex-col justify-center'
                        style={{ backgroundImage: 'url("/assets/image 44.png")' }}
                    >
                        <div className='flex flex-col items-center gap-1'>
                            <div className="h-5 w-5">
                                <img
                                    src="/assets/mynaui_letter-m-waves-solid.png"
                                    alt="Balance"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <span className="lancelot-regular">100</span>
                        </div>
                        <span className="font-normal text-[12px]">
                            MOSQ points
                        </span>
                    </div>
                    <div
                        className='bg-cover bg-center bg-no-repeat border border-gray-500 rounded-md px-5 py-2 flex items-center flex-col justify-center'
                        style={{ backgroundImage: 'url("/assets/image 44.png")' }}
                    >
                        <div className='flex flex-col items-center gap-1'>
                            <div className="h-5 w-5">
                                <img
                                    src="/assets/Vector.png"
                                    alt="Balance"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <span className="lancelot-regular">1</span>
                        </div>
                        <span className="font-normal text-[12px]">
                            Play pass
                        </span>
                    </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 px-3 py-2">
                    <p className='text-center'>Return tomorrow to continue your 2-day streak.
                    Note: Missing a day will reset your rewards!</p>
                </div>
            </div>

            {/* Start Farming Button with Fixed Positioning */}
            <div className="fixed bottom-20 w-full max-w-md left-1/2 transform -translate-x-1/2 px-4">
                <NavLink to="/home" className="flex items-center justify-center px-4 gap-2 bg-[#FFD700] text-black font-bold rounded-full w-full py-4 font-medium text-base">
                    Continue
                </NavLink>
            </div>
        </>
    )
}

export default Preloader