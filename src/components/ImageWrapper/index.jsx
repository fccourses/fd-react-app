import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

const ImageWrapper = props => {
  const { width, height, style, ...restProps } = props;

  const inlineStyles = {
    ...style,
    width,
    height,
  };

  return <div style={inlineStyles} {...restProps} />;
};

ImageWrapper.defaultProps = {
  className: styles.wrapper,
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImageWrapper;
