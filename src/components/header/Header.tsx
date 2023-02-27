import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/reducer/searchSlice/SearchSlice";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const searchValue = useSelector((state: any) => state.search.search);
  const dispatch: any = useDispatch();
  const handleChange = (e: any) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="headerBody">
      <div className="Title">Image Gallery</div>
      <div className="MiddleGround">
        <div className="InputBody">
          <BsSearch />
          <input
            value={searchValue}
            onChange={handleChange}
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
        <div className="NavItem">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}

export default Header;
