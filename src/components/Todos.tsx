import trashLogo from '../assets/logos/trash.svg';
import completeLogo from '../assets/logos/complete.svg';

const Todos = () => {
  return (
    <div className="w-full px-5 pb-10">
      <div className="border border-[#1f2544e6] bg-[#1f254491] rounded py-4 px-4 text-center">
        <h2 className="text-white">There is no todos.</h2>
      </div>
      <div>
        <button className="bg-[#1f2544] hover:bg-[#1f2544e6] text-white px-8 py-2 rounded mr-5">
          Pending
        </button>
        <button className="bg-[#1f2544] hover:bg-[#1f2544e6] text-white px-8 py-2 rounded">
          Completed
        </button>
      </div>
      <div className="mt-5">
        <div className="flex border border-[#1f2544e6] rounded px-3 py-2">
          <div className="w-[80%]">
            <h1 className="font-bold">First todo</h1>
            <p className="font-light">This is my first todo</p>
          </div>
          <div className="flex items-center justify-around w-[20%] px-3 py-2">
            <img className="w-[20px] cursor-pointer" src={completeLogo} />
            <img className="w-[20px] cursor-pointer" src={trashLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
