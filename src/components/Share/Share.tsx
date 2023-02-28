import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { toggleShare } from "../../features/reducer/Miscellaneous/Miscellaneous";

export default function Share({ Link }: { Link: string }) {
  const { isShare } = useSelector((state: any) => state.miscellaneous);
  const dispatch = useDispatch();
  useEffect(() => {}, [isShare]);
  return (
    <div className={` ${isShare ? "" : "hide"} share`}>
      <TwitterShareButton
        url={Link}
        title="Check out this awesome website"
        className="share__btn"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton
        url={Link}
        title="Check out this awesome website"
        className="share__btn"
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TelegramShareButton
        url={Link}
        title="Check out this awesome website"
        className="share__btn"
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton
        url={Link}
        title="Check out this awesome website"
        className="share__btn"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={Link}
        title="Check out this awesome website"
        className="share__btn"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <button
        className="share__btn"
        onClick={() => {
          dispatch(toggleShare(false));
        }}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}
