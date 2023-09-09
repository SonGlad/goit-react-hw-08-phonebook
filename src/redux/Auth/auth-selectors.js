export const selectUser = state => state.auth.user.name;

export const loggedUser = state => state.auth.isLoggedIn;

export const isLoading = state => state.auth.isLoading;