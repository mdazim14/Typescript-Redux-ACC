const Header = () => {
  return (
    <div className="flex justify-between bg-yellow-400">
      <div className="">
        <img height={100} width={400} src={'/images/Logo.png'} alt="" />
      </div>
      <div className="border-8 border-green-500">
        <div>
          <input type="text" className="p-3 border" />
        </div>
        <div>
          <button className="btn btn-blue rounded-full bg-indigo-600 ">
            Search
          </button>
          <button className="flex w-full justify-center rounded-md  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
