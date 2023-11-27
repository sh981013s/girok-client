import { PropsWithChildren } from 'react';

import * as S from './PageLayout.styles';

import Navbar from '@/components/_common/navbar/Navbar.tsx';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <S.Layout>
      <Navbar />
      <S.ChildrenLayout>{children}</S.ChildrenLayout>
    </S.Layout>
  );
};

export default PageLayout;
