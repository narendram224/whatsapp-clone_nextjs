/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ReactNode } from 'react';

interface ITypography {
  type?: string;
  children: ReactNode;
  [x: string]: any;
}

const Typography: FC<ITypography> = ({ type, children, ...props }) => {
  switch (type) {
    case 'p':
      return <p {...props}>{children}</p>;
    case 'h6':
      return <h6 {...props}>{children}</h6>;
    case 'h5':
      return <h5 {...props}>{children}</h5>;
    case 'h4':
      return <h4 {...props}>{children}</h4>;
    case 'h3':
      return <h3 {...props}>{children}</h3>;
    case 'h2':
      return <h2 {...props}>{children}</h2>;
    case 'h1':
      return <h1 {...props}>{children}</h1>;
    default:
      return <p {...props}>{children}</p>;
  }
};
Typography.defaultProps = {
  type: 'p',
};

export default Typography;
