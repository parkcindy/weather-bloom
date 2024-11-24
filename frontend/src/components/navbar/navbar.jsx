import HamburgerIcon from '../icons/hamburger';
import navIcon from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import { navList } from './navList';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { useSidebarContext } from '@/src/config/context';

export default function Navbar() {
  const { showSidebar, setShowSidebar } = useSidebarContext();
  return (
    <header>
      <nav className='text-primary md:px-8 lg:px-16 bg-primary-green fixed z-50 flex items-center justify-between w-full p-2 font-semibold shadow-md'>
        <div className='md:hidden'>
          {!showSidebar && (
            <HamburgerIcon
              onClick={() => setShowSidebar(!showSidebar)}
              className='size-8 cursor-pointer'
            />
          )}
        </div>
        <img src={navIcon} className=' md:w-28 w-24' />
        <div className='md:flex md:text-base lg:gap-10 lg:text-lg hidden gap-3 text-xs'>
          {navList.map((data) => {
            return (
              <div key={data.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'underline-offset-8 underline' : 'text-black'
                  }
                  to={data.link}
                >
                  {data.name}
                </NavLink>
              </div>
            );
          })}
        </div>

        <div className='relative'>
          <Input
            type='search'
            placeholder='Pencarian'
            className='bg-secondary-green focus-visible:ring-1 focus-visible:ring-gray-400 focus-visible:ring-offset-0 h-12 pl-4 pr-10 border-none rounded-full'
          />
          <Search className='right-4 top-1/2 absolute w-5 h-5 text-gray-500 -translate-y-1/2' />
        </div>
      </nav>
    </header>
  );
}
