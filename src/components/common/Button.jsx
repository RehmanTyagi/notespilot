const Button = ({ type, children, className }) => {
  return (
    <button
      className={`${className} hover:bg-primary/80 text-white font-semibold p-2.5 rounded bg-primary`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
