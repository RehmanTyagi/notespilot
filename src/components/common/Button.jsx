const Button = ({ type, children, className, isDisabled }) => {
  return (
    <button
      className={`${className} ${
        isDisabled && 'cursor-not-allowed opacity-50'
      } hover:bg-primary/80 text-white font-semibold p-2.5 rounded bg-primary`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
