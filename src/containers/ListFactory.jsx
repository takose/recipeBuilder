import React from 'react';

export default function ListFactory(ItemComponent, { listClassName, imageClassName, imageUrl }) {
  return ({ currentActionIds, currentItemIds, items, actions, onItemClick }) => {
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
  };
}
