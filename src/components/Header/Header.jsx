const Header = () => {
  return (
    <header className="bg-[url('../../../public/header.jpeg')] bg-cover bg-no-repeat h-screen  text-white flex flex-col text-center mb-12">
      <div className="flex justify-between p-3 items-center mb-64">
        <h5>HOME_H</h5>
        <nav className="flex gap-5 items-center">
          <a>Home</a>
          <a>About us</a>
          <a>Furniture</a>
          <a>Contact us</a>
          <button className="border p-2 rounded-[10px]">Log in</button>
          <button className="border-[#D4B170] p-2 rounded-[10px] bg-[#D4B170]">
            Sign up
          </button>
        </nav>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-7xl max-w-screen-lg">
          Everyone Loves To Welcome A Good Furniture
        </h1>
      </div>
    </header>
  );
};

export default Header;
