import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../../features/reducer/searchSlice/SearchSlice";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const searchValue = useSelector((state: any) => state.search.search);
  const dispatch: any = useDispatch();
  const handleChange = (e: any) => {
    dispatch(setSearch(e.target.value));
  };
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/search/q=" + searchValue);
  };
  //   code author:pyansh
  return (
    <div className="headerBody">
      <div
        className="Title"
        onClick={() => {
          navigate("/");
        }}
      >
        Image Gallery
      </div>
      <div className="MiddleGround">
        <div className="InputBody res_Input">
          <BsSearch />
          <input
            value={searchValue}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleclick();
              }
            }}
            className="inputHeader"
            type="text"
            placeholder="Search Images Here"
          />
        </div>
        <nav className="header_nav">
          <div className="NavItem">Explore </div>
          <div className="NavItem">Collections</div>
          <div className="NavItem">Community</div>
        </nav>
      </div>
      <nav className="header_nav">
        <div className="NavItem">Dark Mode</div>
        <div className="darkToggle">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}

export default Header;
