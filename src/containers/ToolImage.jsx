import React from 'react';
import styles from './Tool.scss';

class ToolImage extends React.Component {
  render() {
    const { tool } = this.props;
    return (
      <div
        className={styles.tool}
        style={{
          backgroundImage: `url(${tool.image_url})`,
        }}
      />
    );
  }
}

export default ToolImage;
