import { FaTelegramPlane } from "react-icons/fa";

const Task = () => {
  return (
    <>
      <div className="user flex px-5 justify-center flex-col mt-10">
        <div className='w-full flex items-center justify-center flex-col mt-5'>
          <div className='w-24 h-24'>
            <img src="/assets/image 16.png" alt="" className='object-cover w-full h-full' />
          </div>
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="h-8 w-8">
              <img src="/assets/mynaui_letter-m-waves-solid.png" alt="Balance" className="h-full w-full object-cover" />
            </div>
            <span className="font-bold text-xl lancelot-regular">15,965</span>
          </div>
        </div>


        <div className='grid w-full mt-3 grid-cols-3'>
          <div className="flex items-center flex-col">
            <p className='font-medium text-gray-600'>Rewards</p>
            <div className='flex items-center'>
              <p className='text-base'>+2.2K</p>
              <div className="h-5 w-5">
                <img src="/assets/mynaui_letter-m-waves-solid.png" alt="Balance" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className='font-medium text-gray-600'>Rewards</p>
            <div className='flex items-center'>
              <p className='text-base'>+2.2K</p>
              <div className="h-5 w-5">
                <img src="/assets/mynaui_letter-m-waves-solid.png" alt="Balance" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <p className='font-medium text-gray-600'>Rewards</p>
            <div className='flex items-center'>
              <p className='text-base'>+2.2K</p>
              <div className="h-5 w-5">
                <img src="/assets/mynaui_letter-m-waves-solid.png" alt="Balance" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Daily tasks */}
        <div className='flex items-start flex-col w-full mt-5'>
          <h2 className='text-2xl'>Daily Tasks</h2>
          <button className='flex gap-2 w-full  mt-4'>
            <div className='border border-gray-500 rounded-full w-full flex items-center justify-between px-5 py-2'>
              <div className='text'>
                <h3 className="text-start text-sm">Make MOSQ great</h3>
                <p className='text-sm text-gray-500 items-start text-start font-medium'>+200 <span>MOSQ</span></p>
              </div>
              <div className='icon bg-blue-700 px-5 py-1 rounded-full'>
                <FaTelegramPlane className="text-white" size={20} />
              </div>
            </div>
          </button>
          <button className='flex gap-2 w-full  mt-4'>
            <div className='border border-gray-500 rounded-full w-full flex items-center justify-between px-5 py-2'>
              <div className='text'>
                <h3 className="text-start text-sm">Make MOSQ great</h3>
                <p className='text-sm text-gray-500 items-start text-start font-medium'>+200 <span>MOSQ</span></p>
              </div>
              <div className='icon bg-blue-700 px-5 py-1 rounded-full'>
                <FaTelegramPlane className="text-white" size={20} />
              </div>
            </div>
          </button>
        </div>

        {/* Regular tasks */}
        <div className='flex items-start flex-col w-full mt-5'>
          <h2 className='text-2xl'>Tasks</h2>
          <button className='flex gap-2 w-full  mt-4'>
            <div className='border border-gray-500 rounded-full w-full flex items-center justify-between px-5 py-2'>
              <div className='text'>
              <h3 className="text-start text-sm">Follow MOSQ on Instagram</h3>
                <p className='text-sm text-gray-500 items-start text-start font-medium'>+200 <span>MOSQ</span></p>
              </div>
              <button className="bg-yellow-400 px-5 py-1 rounded-full text-black">Open</button>
            </div>
          </button>
          <button className='flex gap-2 w-full  mt-4'>
            <div className='border border-gray-500 rounded-full w-full flex items-center justify-between px-5 py-2'>
              <div className='text'>
              <h3 className="text-start text-sm">Follow MOSQ on Instagram</h3>
                <p className='text-sm text-gray-500 items-start text-start font-medium'>+200 <span>MOSQ</span></p>
              </div>
              <button className="bg-yellow-400 px-5 py-1 rounded-full text-black">Open</button>
            </div>
          </button>
          <button className='flex gap-2 w-full  mt-4'>
            <div className='border border-gray-500 rounded-full w-full flex items-center justify-between px-5 py-2'>
              <div className='text'>
                <h3 className="text-start text-sm">Follow MOSQ on Instagram</h3>
                <p className='text-sm text-gray-500 items-start text-start font-medium'>+200 <span>MOSQ</span></p>
              </div>
              <button className="bg-yellow-400 px-5 py-1 rounded-full text-black">Open</button>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Task