import React, { ReactNode } from 'react';
import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find the perfect rental in your area',
  keywords:
    'Property Pulse, Rental, Real Estate, Property, Property Search, Property Finder, Property Listings',
};

type LayoutProps = { children?: ReactNode };

const MainLayout: React.FC = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
