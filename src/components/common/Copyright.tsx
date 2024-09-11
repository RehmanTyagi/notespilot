import * as Brand from "../../constants/brandInfo";
const Copyright = () => {
  return (
    <span className="p-4 text-center text-xs font-medium leading-normal text-dark/50">
      © 2024 {Brand.BRAND_NAME} Platform. All rights reserved.
    </span>
  );
};

export default Copyright;
