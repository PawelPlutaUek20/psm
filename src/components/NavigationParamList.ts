export type UnauthorisedStackParamList = {
  login: {};
  registration: {};
};

export type AuthorisedStackParamList = {
  Home: {};
  Details: {
    flickId: number;
  };
};
