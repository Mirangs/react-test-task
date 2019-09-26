import React from 'react';
import PropTypes from 'prop-types';

import './ImagesListItem.css';
import { ReactComponent as LikesIcon } from './img/icon-like.svg';
import { ReactComponent as CommentIcon } from './img/icon-comment.svg';

const ImagesListItem = ({
  imageUrl,
  likes = 0,
  comments = 0
}) => {
  return(
    <li className="ImagesListItem">
      <img src={imageUrl} />
      <p className="ImagesListItem__information">
        <span className="Likes">
          <LikesIcon className="LikesIcon" />
          {likes}
        </span>
        <span className="Comments">
          <CommentIcon className="CommentIcon" />
          {comments}
        </span>
      </p>
    </li>
  );
};

ImagesListItem.propTypes = {
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
}

export default ImagesListItem;