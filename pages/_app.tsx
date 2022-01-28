import '../styles/sr_style2022.css'
import '../styles/ace-responsive-menu.css'
import '../lib/firebase'
import '../styles/font-awesome.min.css'
import { RecoilRoot } from 'recoil'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>)
}

export default MyApp
