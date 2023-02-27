import React from "react";
import { BiLike } from "react-icons/bi";
function ImgCard({
  width,
  height,
  ImgUrl,
  profileUrl,
  name,
  tag,
  likeCount,
}: any) {
  return (
    <div
      className="imgCardBody"
      style={{ width: `${width}`, height: `${height}` }}
    >
      <img src={ImgUrl} alt="" />
      <div className="ImgCardDetails">
        <div className="ImgCardProfile">
          <img src={profileUrl} />
          <div className="ImgProfileDetails">
            <h3>{name}</h3>
            <p>{tag}</p>
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
