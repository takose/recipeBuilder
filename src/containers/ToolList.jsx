import React from 'react';
import { connect } from 'react-redux';
import { addTool } from '../actions';
import styles from './ToolList.scss';

const ImageButton = ({ tool, onToolClick }) => (
  <button
    className={styles.tool}
    onClick={() => onToolClick(tool)}
  >
    <img
      className={styles.toolImage}
      src={tool.image_url}
      alt={tool.name}
    />
  </button>
);

class ToolList extends React.Component {
  render() {
    const tools = this.props.tools.map((tool) => {
      const isEquipment = !this.props.equipments.hasOwnProperty(tool.id);
      if (isEquipment) {
        return (
          <ImageButton
            key={tool.id}
            tool={tool}
            onToolClick={this.props.onToolClick}
          />
        );
      }
      return null;
    });
    return (
      <div className={styles.toolList}>
        {tools}
      </div>
    );
  }
}

export default connect(state => ({
  tools: state.tools,
  equipments: state.equipments,
}), {
  onToolClick: addTool,
})(ToolList);
