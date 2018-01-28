const initialState = [
  {
    id: 0,
    name: 'carrot',
    image_url: 'http://3.bp.blogspot.com/-QCe-ngfpbTg/UkJM8tkaq6I/AAAAAAAAYWM/U3pbo3YS9XA/s400/ninjin_carrot.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 1,
    name: 'soup',
    image_url: 'https://i.gyazo.com/e3ea6f66f4a1099b15e56a4cc3d70d81.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 2,
    name: 'butter',
    image_url: 'https://i.gyazo.com/a97bd4befce4fe205e69b9d38318ec7e.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 3,
    name: 'cauliflower',
    image_url: 'http://4.bp.blogspot.com/-A5NNn8q2w28/UkJMp4-YKgI/AAAAAAAAYQ8/YR5TvsY3POg/s400/cauliflower.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 4,
    name: 'milk',
    image_url: 'http://1.bp.blogspot.com/-manmYEPk2Pg/UTbWxzkS61I/AAAAAAAAOkU/MjRGCFT7qZE/s400/milk_pack.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 5,
    name: 'sake',
    image_url: 'https://3.bp.blogspot.com/-9lGFTFg5zb8/U2ssEDxICdI/AAAAAAAAf-Q/euXKlJ2hM9Q/s400/cooking_ryourisyu.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 6,
    name: 'flour',
    image_url: 'http://1.bp.blogspot.com/-ZjZAgX2LciA/U6llMiAd6PI/AAAAAAAAhsw/LKnvErTLhTQ/s400/food_flour.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 7,
    name: 'onion',
    image_url: 'http://3.bp.blogspot.com/-SDkR2b5YQec/UkJNENH-daI/AAAAAAAAYYE/fZCzG5KG9I4/s400/tamanegi_onion.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 8,
    name: 'chicken',
    image_url: 'https://2.bp.blogspot.com/-OPMQ6Nodeao/U2srxvijNNI/AAAAAAAAf4I/OPmSGh_x_nA/s400/niku_tori.png',
    merged: false,
    addedActionIds: [],
  },
];

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INGREDIENT_STATE':
      return state.map((i) => {
        if (action.ingredientId === i.id) {
          return {
            ...i,
            addedActionIds: [
              ...i.addedActionIds,
              action.actionId,
            ],
          };
        }
        return i;
      });
    default:
      return state;
  }
};

export default ingredients;
