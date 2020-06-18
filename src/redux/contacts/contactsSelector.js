export const getContacts = (state) => state.contacts;

export const onFilterContacts = (state) => state.filter;

// export const getFilterContact = (state) => {  // Не можу придумать, як його зробить!!!
//   const allContacts = getContacts(state);
//   const filter = onFilterContacts(state);

//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
