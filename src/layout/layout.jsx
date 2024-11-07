import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import Footer from '../components/footer/Footer';
export default function Layout() {
  return (
    <main className='bg-primary-green w-full h-auto overflow-y-auto'>
      <Navbar />
      <Sidebar />
      <section className='flex items-center justify-center w-full h-full'>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
