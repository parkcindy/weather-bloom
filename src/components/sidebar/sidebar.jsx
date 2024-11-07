import { useSidebarContext } from '../../config/context/hook';
import { NavLink } from 'react-router-dom';
import { navList } from '../navbar/navList';
import navIcon from '../../assets/file.png';
import { XIcon } from '../icons/x-icon';

export default function Sidebar() {
  const { showSidebar, setShowSidebar } = useSidebarContext();

  return (
    <section
      className={`fixed top-0 z-50 h-full w-full bg-black bg-opacity-60 ${
        showSidebar ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <aside
        className={`fixed left-0 flex h-full w-[90%] flex-col items-center gap-16 bg-white px-8 py-16 transition-transform duration-500 ease-in-out sm:w-[60%] md:hidden ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button onClick={() => setShowSidebar(false)} className='right-6 top-6 size-6 absolute'>
          <XIcon />
        </button>

        <img src={navIcon} className='h-13' />
        <nav className='flex flex-col w-full h-full gap-4 font-medium'>
          {navList.map((item) => (
            <div key={item.name} className='flex flex-col gap-4'>
              <hr className='w-full' />
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? 'text-primary-blue' : 'text-black')}
                onClick={() => setShowSidebar(false)}
              >
                {item.name}
              </NavLink>
            </div>
          ))}
          <hr className='w-full' />
        </nav>
      </aside>
    </section>
  );
}
