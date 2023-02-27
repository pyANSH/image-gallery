import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import ImgCard from "../components/imgCard/ImgCard";
import Suggestion from "../components/searchSuggestions/Sugesstion";
import { searchThunk } from "../features/thunk/searchThunk";

function Search() {
  const { q } = useParams();
  const dispatch: any = useDispatch();
  const { unsplashResult, queryStatus } = useSelector(
    (state: any) => state.unsplash
  );
  React.useLayoutEffect(() => {
    if (q) {
      dispatch(searchThunk(q!));
    } else {
      dispatch(searchThunk("random"));
    }
  }, [q]);
  React.useEffect(() => {}, [queryStatus]);

  return (
    <>
      <Header />
      <Suggestion />
      <div className="gallery">
        {unsplashResult && unsplashResult.length > 0 ? (
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
          <h1 className="h-404">Loading...</h1>
        ) : (
          <h1 className="h-404">Not Found</h1>
        )}
      </div>
    </>
  );
}

export default Search;
