let nextPhone = 0;

export const addPhone = payload => ({
  type: "ADD_PHONE",
  id: nextPhone++,
  payload
});

export const removePhone = id => ({
  type: "REMOVE_PHONE",
  id
});

export const updatePhone = (id, payload) => ({
  type: "UPDATE_PHONE",
  id,
  payload
});
