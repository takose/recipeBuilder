import React from 'react';

const ListFactory = (ItemComponent, { listClassName, imageClassName, imageUrl }) => (
  ({
    currentActionIds, currentItemIds, items, actions, onItemClick, currentActionId,
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
          currentActionId,
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
