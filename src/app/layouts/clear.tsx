import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const ClearLayout: FC = () => {
  return (
    <div className="page">
      <Outlet />
    </div>
  );
};

export default ClearLayout;