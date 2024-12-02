/** @format */
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/navbar/navbar';
import AnimatedCursor from 'react-animated-cursor';
import { SmoothScrollProvider } from './components/animations/smoothscrollwrapper';
import Footer from './components/footer';
import Preloader from './preloader';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: {
    default: 'Ayn & Technologies',
    template: '%s | Ayn Media & Technologies',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScrollProvider>
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            showSystemCursor
            innerStyle={{
              backgroundColor: '#ffde16',
            }}
            outerStyle={{
              border: '3px solid #ffde16',
            }}
          />{' '}
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
        d
      </body>
    </html>
  );
}
