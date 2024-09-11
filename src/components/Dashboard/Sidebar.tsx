const Sidebar = () => {
  return (
    <div className="order-2 flex items-center justify-between rounded-md border-r-2 p-1.5 text-dark max-md:border-t-2 md:order-none md:flex-col">
      <h1 className="font-semibold text-primary">Logo</h1>
      <div className="h-10 w-10 rounded-full bg-green-400 md:self-end"></div>
    </div>
  );
};

export default Sidebar;
