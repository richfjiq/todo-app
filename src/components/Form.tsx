const Form = () => {
  return (
    <div className="w-full px-5 md:px-0 md:w-[75%] py-10">
      <div className="flex flex-col">
        <label className="mb-2">Title</label>
        <input
          className="border rounded px-2 py-2 mb-8 border-[#1f2544e6]"
          placeholder="Add a title"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2">Description</label>
        <input
          className="border rounded px-2 py-2 mb-8 border-[#1f2544e6]"
          placeholder="Add description"
        />
      </div>
      <button className="bg-[#1f2544] hover:bg-[#1f2544e6] text-white px-8 py-2 rounded">
        Add todo
      </button>
    </div>
  );
};

export default Form;
