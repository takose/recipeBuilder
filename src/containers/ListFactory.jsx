import React from 'react';

export default function ListFactory(ItemComponent, { listClassName, imageClassName, imageUrl }) {
  return ({ currentActionIds, currentItemIds, items, actions, onClick }) => {
    const listItems = items.map(item => (
      <ItemComponent
        {...{
          item,
          currentActionIds,
          currentItemIds,
          actions,
          onClick,
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