import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  togglePopup,
  toggleShare,
} from "../../features/reducer/Miscellaneous/Miscellaneous";
import {
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineInstagram,
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineTwitter,
} from "react-icons/ai";
import Share from "../Share/Share";
function Popoup() {
  const { isPopup, res, isShare } = useSelector(
    (state: any) => state.miscellaneous
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {}, [res, isPopup]);

  return (
    <div className={`${isPopup ? "" : "hide"}`}>
      {res && isPopup && (
        <div className={`popup ${isPopup ? "" : "hide"}`}>
          <div className="popup_inner">
            <button
              className="close_btn"
              onClick={() => {
                dispatch(togglePopup(false));
              }}
            >
              <AiOutlineClose />
            </button>
            <div
              style={{ backgroundImage: `url(${res.urls.full})` }}
              className="pop_img"
            >
              <div className="pop_img_inner">
                <div>
                  <button
                    onClick={() => {
                      dispatch(toggleShare(!isShare));
                    }}
                  >
                    <AiOutlineShareAlt />
                    Share
                  </button>
                  <button
                    onClick={() => {
                      window.open(res.urls.full);
                    }}
                  >
                    <AiOutlineInfoCircle />
                    Info
                  </button>
                  <Share Link={res.links.html} />
                </div>
                <span
                  onClick={() =>
                    window.open(
                      `https://unsplash.com/photos/${res.id}/download?force=true`
                    )
                  }
                  className="download_btn"
                >
                  Download Image
                </span>
              </div>
            </div>
            <div className="details">
              <div className="profileDetails">
                <div
                  className="profile"
                  onClick={() => {
                    window.open(res.user.links.html);
                  }}
                >
                  <div className="profile_img">
                    <img src={res.user.profile_image.medium} alt="" />
                  </div>
                  <div className="profile_name">
                    <h3>{res.user.name}</h3>
                    <p>@{res.user.username}</p>
                  </div>
                </div>
                <div className="social">
                  <button>
                    {res.user.instagram_username && (
                      <div
                        onClick={() => {
                          window.open(
                            `https://www.instagram.com/${res.user.instagram_username}`
                          );
                        }}
                      >
                        <AiOutlineInstagram /> /{res.user.instagram_username}
                      </div>
                    )}
                  </button>
                  <button>
                    {res.user.twitter_user_name && (
                      <div
                        onClick={() => {
                          window.open(
                            `https://www.instagram.com/${res.user.twitter_username}`
                          );
                        }}
                      >
                        <AiOutlineTwitter /> /{res.user.twitter_username}
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="counts">
                <div className="like_counts">
                  <AiOutlineLike />
                  <p>
                    {res.likes > 1000
                      ? `${(res.likes / 1000).toFixed(2)}k`
                      : res.likes}
                  </p>
                </div>
              </div>
            </div>
            <div className="tags">
              <p>Related Tags</p>
              {res.tags.map((tag: any) => {
                return (
                  <button
                    className="s_btn s_btn_primary"
                    onClick={() => {
                      dispatch(togglePopup(false));
                      navigate(`/search/${tag.title}`);
                    }}
                  >
                    {tag.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popoup;
