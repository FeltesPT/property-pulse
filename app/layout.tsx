import React, { ReactNode } from 'react';
import '@/assets/styles/global.css';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find the perfect rental in your area',
  keywords: 'Property Pulse, Rental, Real Estate, Property, Property Search, Property Finder, Property Listings',
}

type LayoutProps = {children?: ReactNode}

const MainLayout: React.FC = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
