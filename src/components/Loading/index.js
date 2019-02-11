import React from 'react';
import PropTypes from 'prop-types';

import LoadingImageUrl from 'assets/images/loading.gif';
import './styles.css';

const LoadingImageStyle = {
  backgroundImage: `url(${LoadingImageUrl})`,
};

const Loading = (props) => {
  const { hide } = props;
  return (
    <div className={hide ? 'container--loading hidden' : 'container--loading'}>
      <div className='loading' style={LoadingImageStyle} />
    </div>
  );
};

Loading.propTypes = {
  hide: PropTypes.bool,
};

Loading.defaultProps = {
  hide: true,
};

export default Loading;
