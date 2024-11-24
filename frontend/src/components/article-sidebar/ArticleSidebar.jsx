import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function ArticleSidebar({ service, farmer, duration, location }) {
  return (
    <div className='bg-lime-700 text-sm shadow-lg rounded-lg pt-2 mt-6 md:mt-0 md:absolute md:top-[34rem] md:right-0 md:w-[280px]'>
      <div className='flex flex-col gap-2 p-5 bg-white'>
        <div>
          <p className='text-gray-500'>Farmer:</p>
          <p className='font-medium'>{service}</p>
        </div>
        <div>
          <p className='text-gray-500'>Farmer:</p>
          <p className='font-medium'>{farmer}</p>
        </div>
        <div>
          <p className='text-gray-500'>Duration:</p>
          <p className='font-medium'>{duration}</p>
        </div>
        <div>
          <p className='text-gray-500'>Location:</p>
          <p className='font-medium'>{location}</p>
        </div>
        <div className='pt-4 border-t border-gray-200'>
          <div className='flex gap-4'>
            <div
              className='size-8 flex items-center justify-center text-black bg-gray-200 rounded-full'
              aria-label='Twitter'
            >
              <Twitter className='size-5' />
            </div>
            <div
              className='size-8 flex items-center justify-center text-black bg-gray-200 rounded-full'
              aria-label='Facebook'
            >
              <Facebook className='size-5' />
            </div>
            <div
              className='size-8 flex items-center justify-center text-black bg-gray-200 rounded-full'
              aria-label='Instagram'
            >
              <Instagram className='size-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
