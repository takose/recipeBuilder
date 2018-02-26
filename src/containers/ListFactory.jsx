import React from 'react';
import PropTypes from 'prop-types';

const ListFactory = (ItemComponent, { listClassName, imageClassName, imageUrl }) => (
  ({
    currentActionIds, currentItemIds, items, actions, onItemClick,
  }) => {
    const listItems = items.map(item => (
      <ItemComponent
        key={item.id}
        {...{
          item,
          currentActionIds,
          currentItemIds,
          actions,
          onItemClick,
        }}
      />
    ));

    return (
      <div className={listClassName}>
        <img
          src={imageUrl}
          alt=""
          className={imageClassName}
        />
        {listItems}
      </div>
    );
  }
);

export default ListFactory;
