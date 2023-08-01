import '@/styles/global.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '@/components/layout'
config.autoAddCss = false

export function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;