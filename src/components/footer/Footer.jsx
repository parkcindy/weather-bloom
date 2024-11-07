import { articles } from '@/src/data/articles/articles';
import { horizontalSpace } from '@/src/styles/style';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#8B9D5D] text-white py-4 mt-8 md:mt-10'>
      <div className={`max-w-6xl mx-auto px-4 ${horizontalSpace}  `}>
        <div className='flex flex-wrap -mx-4'>
          <div className='md:w-1/3 md:mb-0 w-full px-4 mb-8'>
            <h3 className='mb-4 text-xl font-semibold'>Jelajahi</h3>
            <nav className='space-y-2'>
              <a href='/' className='hover:text-gray-200 block'>
                Beranda
              </a>
              <a href='/tentang-kami' className='hover:text-gray-200 block'>
                Tentang Kami
              </a>
              <a href='/artikel' className='hover:text-gray-200 block'>
                Artikel
              </a>
              <a href='/kontak' className='hover:text-gray-200 block'>
                Kontak
              </a>
            </nav>
          </div>

          <div className='md:w-1/3 md:mb-0 w-full px-4 mb-8'>
            <h3 className='mb-4 text-xl font-semibold'>Postingan Terbaru</h3>
            <div className='space-y-4'>
              {articles
                .filter((_, i) => i < 2)
                .map((article) => {
                  return (
                    <article key={article.id} className='flex gap-3'>
                      <img
                        src={article.image}
                        alt={article.title}
                        className='w-[60px] h-[60px] rounded object-cover object-center'
                      />
                      <div>
                        <time className='text-sm text-gray-200'>13 SEP 2023</time>
                        <h4 className='text-sm'>{article.title}</h4>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>

          {/* Kontak Section */}
          <div className='md:w-1/3 w-full px-4'>
            <h3 className='mb-4 text-xl font-semibold'>Kontak</h3>
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 mt-1' />
                <div>
                  <p className='font-semibold'>ALAMAT</p>
                  <p className='text-sm'>Kota Batam</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Mail className='w-5 h-5 mt-1' />
                <div>
                  <p className='font-semibold'>EMAIL</p>
                  <p className='text-sm'>info@agertech.com</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Phone className='w-5 h-5 mt-1' />
                <div>
                  <p className='font-semibold'>PHONE</p>
                  <p className='text-sm'>+666 666</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-white/20 pt-4 mt-6 text-sm text-center border-t'>
          © Copyright 2024, All Rights Reserved by AgerTech.
        </div>
      </div>
    </footer>
  );
}
