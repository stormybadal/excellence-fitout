const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-16 bg-white shadow-md flex items-center justify-between px-6 md:ml-64">
      <h1 className="text-lg font-semibold text-orange-600">Dashboard</h1>

      <div className="flex items-center space-x-4">
        <button className="rounded bg-orange-500 px-3 py-1 text-white hover:bg-orange-600">
          Action
        </button>
      </div>
    </header>
  );
};

export default Header;
