import React, { ReactNode } from 'react';
import Head from 'next/head';
import GlobalHeader from '../global-header/global-header';
import GlobalFooter from '../global-footer/global-footer';
import { 
  Page,
  PageItem,
  Banner,
  Content, } from './layout.styles';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = 'Richard George Test Site',
}: Props): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Richard's test website using React and Next" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Page>
      <PageItem>
        <GlobalHeader />
      </PageItem>
      <PageItem>
        <Banner>
          banner goes here
        </Banner>
      </PageItem>
      <PageItem>
        <Content>
          {children}
        </Content>
      </PageItem>
      <PageItem>
        <GlobalFooter/>
      </PageItem>
    </Page>
  </>
);

export default Layout;