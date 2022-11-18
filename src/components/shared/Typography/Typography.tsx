import React, { FC, ReactNode } from 'react';

interface ITypography {
  type?: string;
  children: ReactNode;
}

const Typography: FC<ITypography> = ({ type, children }) => {
  switch (type) {
    case 'p':
      return <p>{children}</p>;
    case 'h6':
      return <h6>{children}</h6>;
    case 'h5':
      return <h5>{children}</h5>;
    case 'h4':
      return <h4>{children}</h4>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h1':
      return <h1>{children}</h1>;
    default:
      return <p>{children}</p>;
  }
};
Typography.defaultProps = {
  type: 'p',
};

export default Typography;
