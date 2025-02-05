import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { UserBar } from '@/components/UserBar';
import { MLHBanner } from '@/components/MLHBanner';
import { Session } from 'next-auth';
import Nav from '@/components/Page/Nav';

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ThemeProvider enableSystem={false}>
        <MLHBanner />
        <Nav />
        <Component {...pageProps} />
        <UserBar />
      </ThemeProvider>
    </SessionProvider>
  );
}
