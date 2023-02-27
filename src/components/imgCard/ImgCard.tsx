import React from "react";
import { BiLike } from "react-icons/bi";
function ImgCard() {
  return (
    <div className="imgCardBody">
      <img
        src="https://s3-alpha-sig.figma.com/img/2282/2401/a372f9d3561df32e74f5552f6cd4ffc9?Expires=1678665600&Signature=ipUHYL5OfMVNopj~47uX4Z-bQ5qEg~nedIBqBzpgwRmfNUqmStvpmoG-R8-o64Wt3QOWbfyhiQgYsRJ7N5huMCQBawmBGbQyTI6xWP2WemJaDkmmFnDRm96V1ogeEoTT4FyIn-oOLc6npp8X7LjUV4gR59sZKlzPc4xJoTyfXGyjK0bVQ1S8n8~4Wn0NdfAt7VB7PBpMxKeqBhPu0GFrqNPmS1sfz5Da5Ww30U8bOAFMZfXEAqtF9~99PkkD4hBkpcufNVOrPaxKXCTRI-tG275cQNT~U5w4TFZn-F2UGaToRSZIYG59wIbozd0XW~wxRc5b8rzplrSzf294ggm8-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <div className="ImgCardDetails">
        <div className="ImgCardProfile">
          <img src="https://s3-alpha-sig.figma.com/img/554a/69b7/7f5710ceb35fb7d6c450e33c281d9765?Expires=1678665600&Signature=J52-xZ4tTsXpzqDUb1H4u1gQfCUU5ZliMwRZgE~qMRR1CdTeWB4RLBx3kgEZnNzyBKNvTyJsyQn5krLyYmDfov137DwtP0nA2mJdg2BT5hh5dma4UJvL3tgGQSsUH8PU9ZtztgC2I3M8uiJRbRbJ3G455u0wJc50yMSlQtZoPa-nN7eZb0BwCp7hBrIImxRsWy9wVLHtaDBZl7zf5DOgfgERvkzmoukeevDlRl2AZxc5js18-4v7YgDPOV6GpEYTJwNIg944GvMd~IJmy4iOK20GhwMh5dvc24YbsSzzATkJtTE5TFM2qCXklgi9PpaIhoBnLIcC3qNizX8YvIAa9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
