import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useDarkMode } from '../hooks/useDarkMode';

export default function MainLayout({ children }) {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <>
      <Loader />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
