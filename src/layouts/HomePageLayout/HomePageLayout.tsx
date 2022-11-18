import React from 'react';
import { HomePageDialoge, HomePageHeader } from 'src/components';
import MainLayout from '../MainLayout/MainLayout';

const HomePageLayout = () => {
  return (
    <MainLayout>
      <HomePageHeader />
      <HomePageDialoge />
    </MainLayout>
  );
};

export default HomePageLayout;
