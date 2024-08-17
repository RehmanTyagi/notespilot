export interface RootState {
  auth: {
    userAuth: string;
  };
}

export interface AlertState {
  alert: {
    message: string;
    type: string;
    alertExpires: number;
  };
}
