export const Constant = {
  API_METHOD: {
    GET_ALL_EMP: 'ClientStrive/GetAllEmployee',
    GET_ALL_CLIENT: 'ClientStrive/GetAllClients',
    GET_ALL_CLIENT_PROJ: 'ClientStrive/GetAllClientProjects',
    ADD_UPDATE_CLIENT: 'ClientStrive/AddUpdateClient',
    ADD_UPDATE_PROJECT: 'ClientStrive/AddUpdateClientProject',
    USERS: 'users',
    DELETE_CLIENT_BY_ID(id: number) {
      return `ClientStrive/DeleteClientByClientId?clientId=${id}`;
    },
  },

  VALIDATION_MESSAGE: {
    REQUIRED: 'This is Required',
  },
};
