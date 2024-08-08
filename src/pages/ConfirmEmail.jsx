const ConfirmEmail = () => {
  const search = new URLSearchParams(location.search);
  const token = search.get("token");
  console.log(token);

  return <div>ConfirmEmail: {token}</div>;
};

export default ConfirmEmail;
