import Form from './Form';
import Todos from './Todos';

const Home = () => {
  return (
    <div className="flex flex-col items-center px-5 md:px-10">
      <h1 className="text-white text-2xl mt-5 mb-10">My Todos App</h1>
      <div className="flex flex-col w-full max-w-[800px] items-center bg-white rounded shadow-white mb-10">
        <Form />
      </div>
      <div className="flex flex-col w-full max-w-[800px] items-center bg-white rounded shadow-white mb-10">
        <Todos />
      </div>
    </div>
  );
};

export default Home;
