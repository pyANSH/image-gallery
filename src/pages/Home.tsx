import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgCard from "../components/imgCard/ImgCard";
import Search from "../components/mainSearch/Search";
import { searchThunk } from "../features/thunk/searchThunk";

function Home() {
  const { unsplashResult, queryStatus } = useSelector(
    (state: any) => state.unsplash
  );
  const dispatch: any = useDispatch();
  useLayoutEffect(() => {
    dispatch(searchThunk("random"));
    console.log(unsplashResult, queryStatus, "unsplashResult");
  }, []);

  return (
    <>
      <Search />
      <div className="gallery">
        {unsplashResult &&
          unsplashResult.map((item: any) => {
            return (
              <ImgCard
                key={item.id}
                width={item.width}
                height={item.height}
                ImgUrl={item.urls.regular}
                profileUrl={item.user.profile_image.medium}
                name={item.user.name}
                tag={item.user.username}
                likeCount={item.likes}
              />
            );
          })}
      </div>
    </>
  );
}

export default Home;
