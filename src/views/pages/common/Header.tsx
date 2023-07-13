const Header = () => {
  return (
    <div className="container mx-auto bg-slate-400">
      <div className="flex items-center">
        <img height={100} width={400} src={'/images/Logo.png'} alt="" />
      </div>
      <div className="flex border-8 border-green-500">
        <input type="text" className="p-3 border" />

        <button>Search</button>
        <button>sdf</button>
      </div>
    </div>
  );
};

export default Header;
