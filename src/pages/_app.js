import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login'); // Redirect to login if not authenticated
      } else if (router.pathname === '/login') {
        router.push('/dashboard'); // Redirect to dashboard if already logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const handleRouteChange = () => {
      if (process.env.NODE_ENV === 'development' && window.__NEXT_HMR__) {
        window.__NEXT_HMR__.onInvalid(() => {
          window.location.reload();
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, []);

  const noSidebarRoutes = ['/login', '/signup'];

  if (noSidebarRoutes.includes(router.pathname)) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
