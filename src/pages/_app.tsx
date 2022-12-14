import { Layout } from '@/components/common';
import FilterProvider from '@/provider/FilterProvider';
import '@/styles/app.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-responsive-modal/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FilterProvider>
      <SkeletonTheme
        color="#e1e1e1"
        highlightColor="#f5f5f5"
      >

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SkeletonTheme>
    </FilterProvider>
  )
}

export default MyApp
