import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';
import PropTypes from 'prop-types';

import ImagesListItem from '../../components/ImagesListItem/ImagesListItem';
import Spinner from '../../components/Spinner/Spinner';

import './ImagesList.css';

const ImagesList = ({
  images,
  onImagesInit,
  columns,
  loading,
  error
}) => {
  useEffect(() => {
    onImagesInit();
  }, []);

  let content = <Spinner />;

  if (!loading) {
    content = (
      <ul className="ImagesList" style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
        {
          images.map(image => (
            <ImagesListItem 
              key={image.id}
              imageUrl={image.webformatURL}
              likes={image.likes}
              comments={image.comments}
            />
          ))
      }
      </ul>
    );
  }

  if (error) {
    content = <p style={{color: 'red'}}>{error}</p>
  }

  return content;
};

ImagesList.propTypes = {
  images: PropTypes.array.isRequired,
  columns: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  onImagesInit: PropTypes.func.isRequired,
  error: PropTypes.string,
}

const mapStateToProps = state => ({
  images: state.images.images,
  loading: state.images.loading,
  error: state.images.error,
});

const mapDispatchToProps = dispatch => ({
  onImagesInit: () => dispatch(actions.initImages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList);