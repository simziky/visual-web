import React, { ReactNode } from 'react';
import Header from '../navigations/header';
import Footer from '../navigations/footer';
import TrustedPartners from '../reUseables/partners';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Header content goes here */}
      <Header />
      <main className='mx-auto  lg:container'>
        {children}
      </main>
      {/**TRUSTED PARTNERS CAROUSEL */}
      <TrustedPartners />
      
      {/* Footer content goes here */}
      <Footer />
    </div>
  );
};

export default MainLayout;
