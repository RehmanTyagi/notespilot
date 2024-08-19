export const errorHandler = (error: any) => {
  if (error.status === "FETCH_ERROR") {
    return error.error;
  }
  if (error.data) {
    return error.data.error;
  }
  if (error.message) {
    return error.message;
  }
};
