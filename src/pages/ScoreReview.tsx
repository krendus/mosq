import { NavLink } from 'react-router-dom'

const ScoreReview = () => {
    return (
        <>
            <div className="user flex items-center gap-5 justify-center flex-col mt-10">
                <div className="relative">

                    <div
                        className='absolute w-28 h-40 top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#32CD32] via-[#175c26] to-transparent opacity-70 blur-[12px]'
                    ></div>


                    <div className='relative z-10'>
                        <img
                            src="/assets/mosquito-swWSP8SOZQ.png"
                            alt="Mosquito"
                            className="w-56 h-56 object-contain"
                        />
                    </div>
                </div>


                <span className="user-name text-2xl font-medium mt-2 text-center">
                    Awesome! <br />What's your secret?
                </span>

                <div className="flex items-center flex-col justify-center gap-2 px-3 py-2">
                    <p className='font-semibold text-gray-600'>Rewards</p>
                    <div
                        className='bg-cover bg-center bg-no-repeat border border-gray-500 rounded-md px-5 py-2 flex items-center flex-col justify-center'
                        style={{ backgroundImage: 'url("/assets/image 44.png")' }}
                    >
                        <div className='flex items-end gap-1'>
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
                </div>
            </div>

            {/* Start Farming Button with Fixed Positioning */}
            <div className="fixed bottom-20 w-full max-w-md left-1/2 transform -translate-x-1/2 px-4">
                <NavLink to="/dropGame" className="flex items-center justify-center px-4 gap-2 bg-[#FFD700] text-black rounded-full w-full py-4 font-medium text-base">

                    <span className='font-bold'>Play again Farming</span>
                    <div className="h-5 w-5">
                        <img
                            src="/assets/Vector.png"
                            alt="Balance"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <span className='font-bold'>2 plays left</span>

                </NavLink>
            </div>
        </>
    )
}

export default ScoreReview