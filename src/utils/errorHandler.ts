export const errorHandler = (error: any) => {
  if (error.status === "FETCH_ERROR") {
    return error.message;
  }
  if (error.data) {
    return error.data.message;
  }
  if (error.message) {
    return error.message;
  }
};
