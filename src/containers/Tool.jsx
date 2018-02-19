import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import styles from './Tool.scss';

class Tool extends React.Component {
  render() {
    const { tools, toolId } = this.props;
    const tool = tools.find(t => t.id === toolId);
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

const mapStateToProps = state => ({
  tools: state.tools,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Tool);

