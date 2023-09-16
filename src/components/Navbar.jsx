import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(""); // Xato xabari uchun holat
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm || searchTerm.trim() === "") {
      setError("Xato ma'lumot kiritildi!");
      return;
    }
    console.log(searchTerm);
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="w-[100%] fixed bg-slate-400 mb-10">
      <div className="container mx-auto px-8 p-4">
        <div className="flex justify-between">
          <Link to="/">
            <img
              className="w-32"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
              }
              alt=""
            />
          </Link>
          <form onSubmit={handleSearch} className="flex items-center gap-3">
            <input
              className="p-3 border outline-none rounded-md shadow-md hover:bg-slate-100"
              type="search"
              placeholder="Enter your pokemon"
              required
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setError(""); // Xato xabarini tozalash
              }}
            />
            <button className="px-4 py-3  bg-slate-500 hover:bg-slate-300 active:bg-slate-600 shadow-md rounded" type="submit">
              Send
            </button>
          </form>
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default Navbar;
