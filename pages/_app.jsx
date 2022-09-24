import "../styles/globals.scss";
import { PageTransition } from "next-page-transitions";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <PageTransition timeout={300} classNames="page-transition">
        <Component key={router.asPath} {...pageProps} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </div>
  );
}

export default MyApp;
