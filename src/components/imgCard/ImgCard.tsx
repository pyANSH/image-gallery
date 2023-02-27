import React from "react";
import { BiLike } from "react-icons/bi";
function ImgCard({ width, height, ImgUrl, profileUrl }: any) {
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
            <h3>John Doe</h3>
            <p>@john</p>
          </div>
        </div>
        <div className="ImgCardLikes">
          <BiLike />
          <p>1.2k</p>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
