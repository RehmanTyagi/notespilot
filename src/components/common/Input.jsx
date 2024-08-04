const Input = ({ placeholder, type, onChange, className }) => {
  return (
    <input
      className={`${className} w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent`}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};

export default Input;
