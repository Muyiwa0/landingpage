import '@/styles/tailwind.css'
import 'focus-visible'
import 'node_modules/react-modal-video/scss/modal-video.scss'
import '@/styles/pay.css'
import '@/styles/styles.css'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Script id="tawk" strategy="lazyOnload">
      {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/64ec8d9cb2d3e13950ec8644/1h8u0ibpb';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
      `}
    </Script>
  </>
}
