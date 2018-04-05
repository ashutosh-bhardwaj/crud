const phones = (state = [], action) => {
  switch (action.type) {
    case "ADD_PHONE":
      return [...state, { ...action.payload, id: action.id }];

    case "REMOVE_PHONE":
      return state.filter(phone => phone.id !== action.id);

    case "UPDATE_PHONE":
      return state.map(phone => {
        if (phone.id === action.id) {
          return (phone = { ...action.payload, id: action.id });
        }
        return phone;
      });

    default:
      return state;
  }
};

export default phones;
