import React from "react";
import { BiLike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../features/reducer/Miscellaneous/Miscellaneous";
function ImgCard({ ImgUrl, profileUrl, name, tag, likeCount, res }: any) {
  const { isPopup } = useSelector((state: any) => state.miscellaneous);
  const dispatch: any = useDispatch();
  return (
    <div
      className={`imgCardBody `}
      onClick={() => {
        dispatch(togglePopup({ isPopup: true, res: res }));
      }}
    >
      <img src={ImgUrl} alt="" />
      <div className="ImgCardDetails">
        <div className="ImgCardProfile">
          <img src={profileUrl} />
          <div className="ImgProfileDetails">
            <h3>{name}</h3>
            <p>@{tag}</p>
          </div>
        </div>
        <div className="ImgCardLikes">
          <BiLike />
          <p>{likeCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
