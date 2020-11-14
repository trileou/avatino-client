import * as React from 'react';

export interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return <div className="loader"></div>;
};

export default Loader;
