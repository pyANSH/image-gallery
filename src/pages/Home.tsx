import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImgCard from "../components/imgCard/ImgCard";
import Search from "../components/mainSearch/Search";
import Suggestion from "../components/searchSuggestions/Sugesstion";
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
      <Suggestion />
      <div className="gallery">
        {unsplashResult ? (
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
          })
        ) : queryStatus === "loading" ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Not Found</h1>
        )}
        ;
      </div>
    </>
  );
}

export default Home;
