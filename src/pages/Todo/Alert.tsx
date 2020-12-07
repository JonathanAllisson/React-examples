import React, { useEffect } from 'react';

interface Props {
    type: string;
    msg: string;
    removeAlert: () => void;
    list: []
}

const Alert: React.FC<Props> = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;