import React from 'react';
import { Header } from '@/widgets/Header';
import { PageContainer } from '@/shared/ui';

interface PageProps {
    children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => (
    <PageContainer>
        <Header />
        <main>{children}</main>
    </PageContainer>
);
