import { IoMdFlame } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Home = () => {
    // Mock user data
    const user = {
        name: "John Doe",
        profileImage: null
    };

    return (
        <div className="px-4 py-4">
            <div
                className="header bg-cover bg-center bg-no-repeat p-4 rounded-lg"
                style={{ backgroundImage: 'url("/assets/image 44.png")' }}
            >
                <div className="flex items-center justify-between">
                    <div className="border rounded-3xl background-color border-gray-500 flex items-center gap-2 px-3 py-2">
                        <div className="h-5 w-5">
                            <img src="/assets/mynaui_letter-m-waves-solid.png" alt="Balance" className="h-full w-full object-cover" />
                        </div>
                        <span className="lancelot-regular">15,965</span>
                    </div>
                    <div className="border rounded-3xl background-color border-gray-500 flex items-center gap-2 px-3 py-2">
                        <div className="h-5 w-5">
                            <img src="/assets/fluent-color_reward-20.png" alt="Rewards" className="h-full w-full object-cover" />
                        </div>
                        <span>Rewards</span>
                    </div>
                </div>

                <div className="user flex items-center justify-center flex-col mt-10">
                    <div className="rounded-full user-image border border-gray-500 h-28 w-28 background-color flex items-center justify-center text-4xl font-bold">
                        {user.profileImage ? (
                            <img src={user.profileImage} alt={`${user.name}'s profile`} className="h-full w-full object-cover rounded-full" />
                        ) : (
                            user.name.charAt(0)
                        )}
                    </div>
                    <span className="user-name text-lg font-medium mt-2">{user.name}</span>
                    <div className="flex items-center gap-2 px-3 py-2">
                        <div className="h-8 w-8">
                            <img src="/assets/mynaui_letter-m-waves-solid.png" alt="Balance" className="h-full w-full object-cover" />
                        </div>
                        <span className="font-bold text-xl lancelot-regular">15,965</span>
                    </div>
                </div>
            </div>

            {/* Mission Div with Fixed Positioning */}
            <div
                className="mission border border-gray-500 w-[90%] mx-auto rounded-lg px-2 py-4 bg-cover bg-center fixed bottom-40  max-w-md left-1/2 transform -translate-x-1/2"
                style={{ backgroundImage: 'url("/assets/image 45.png")' }}
            >
                <div className="user flex items-center justify-center flex-col">
                    <div className="h-16 w-16">
                        <img src="/assets/image 16.png" alt="Mission" className="h-full w-full object-cover" />
                    </div>
                    <span className="user-name text-lg font-medium mt-2">$MOSQ SWAT</span>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="border rounded-3xl border-gray-500 flex items-center gap-2 px-3 py-2">
                        <div className="h-5 w-5">
                            <img src="/assets/Vector.png" alt="Balance" className="h-full w-full object-cover" />
                        </div>
                        <span className="font-normal">3 play left</span>
                    </div>
                    <div className="border rounded-3xl bg-[#FFD700] text-black border-gray-500 flex items-center gap-2 px-3 py-2">
                    <NavLink to="/dropGame">
                        <span>Kill $MOSQ</span>
                    </NavLink>
                    </div>
                </div>
            </div>

            {/* Start Farming Button with Fixed Positioning */}
            <div className="fixed bottom-20 w-full max-w-md left-1/2 transform -translate-x-1/2 px-4">
                <button className="flex items-center justify-center px-4 gap-2 bg-[#FFD700] text-black rounded-full w-full py-4 font-medium text-base">
                    <IoMdFlame fill="#28A745" />
                    <span>Start Farming</span>
                </button>
            </div>
        </div>
    );
};

export default Home;
