import * as Brand from '../../constants/brandInfo';
const Copyright = () => {
  return (
    <span className='text-center text-default/50 font-medium p-4 text-xs leading-normal'>
      © 2024 {Brand.BRAND_NAME} Platform. All rights reserved.
    </span>
  );
};

export default Copyright;
