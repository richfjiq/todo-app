import { useMemo, useState } from 'react';
import useSWR from 'swr';

import trashLogo from '../assets/logos/trash.svg';
import completeLogo from '../assets/logos/complete.svg';
import { fetcher } from '../utils';
import Loading from './Loading';
import { ITodo } from '../interfaces';

const Todos = () => {
  const [pending, setPending] = useState(true);
  const { data, isLoading } = useSWR<ITodo[]>(
    'http://localhost:8080/api/todos',
    fetcher
  );

  const todosByStatus = useMemo(() => {
    if (!data) return false;
    return data.filter((todo) =>
      pending ? todo.complete === false : todo.complete === true
    );
  }, [data, pending]);

  if (isLoading) {
    return (
      <div className="w-full px-5 py-10 flex flex-col items-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-full px-5 py-10">
      {todosByStatus ? (
        <>
          <div>
            <button
              onClick={() => setPending(true)}
              className={
                pending
                  ? `bg-[#1f2544] hover:bg-[#1f2544e6] text-white px-8 py-2 rounded mr-5`
                  : `border border-[#1f2544] rounded px-8 py-2 text-[#1f2544] mr-5`
              }
            >
              Pending
            </button>
            <button
              onClick={() => setPending(false)}
              className={
                !pending
                  ? `bg-[#1f2544] hover:bg-[#1f2544e6] text-white px-8 py-2 rounded`
                  : `border border-[#1f2544] rounded px-8 py-2 text-[#1f2544]`
              }
            >
              Completed
            </button>
          </div>
          {todosByStatus.map((todo) => (
            <div className="mt-5" key={todo._id}>
              <div className="flex border border-[#1f2544e6] rounded px-3 py-2">
                <div className="w-[80%] sm:w-[85%]">
                  <h1 className="font-bold">{todo.title}</h1>
                  <p className="font-light">{todo.description}</p>
                </div>
                <div className="flex items-center sm:justify-around justify-between sm:w-[15%] w-[20%] ">
                  <img className="w-[20px] cursor-pointer" src={completeLogo} />
                  <img className="w-[20px] cursor-pointer" src={trashLogo} />
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="border border-[#1f2544e6] bg-[#1f254491] rounded py-4 px-4 text-center">
          <h2 className="text-white">There is no todos.</h2>
        </div>
      )}
    </div>
  );
};

export default Todos;
