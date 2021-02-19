import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

const ImageWrapper = props => {
  const { children, width, height } = props;

  const inlineStyles = {
    width,
    height,
  };

  return (
    <div style={inlineStyles} className={styles.wrapper}>
      {children}
    </div>
  );
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ImageWrapper;
