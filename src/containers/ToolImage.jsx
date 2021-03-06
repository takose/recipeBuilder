import React from 'react';
import styles from './Tool.scss';

class ToolImage extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div
        className={styles.tool}
        style={{
          backgroundImage: `url(${item.image_url})`,
        }}
      />
    );
  }
}

export default ToolImage;
