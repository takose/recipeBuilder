const initialState = {
  ff: {
    name: 'ff',
    puttableToolIds: [0, 3],
  },
  table: {
    name: 'table',
    puttableToolIds: [1, 2],
  },
};

const equipments = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default equipments;

