import React from 'react';
import { Separator } from '@/src/components/ui/separator';
import { horizontalSpace, spaceBetweenSection } from '@/src/styles/style';
import { Link } from 'react-router-dom';

export default function ArticleList() {
  const articles = [
    {
      id: 1,
      title: "6 Tanaman Sayuran yang Cocok Ditanam Saat Musim Hujan",
      shortDescription: "Saat musim hujan, beberapa tanaman sayuran dan buah-buahan sangat cocok ditanam karena tahan terhadap ketersediaan air yang melimpah.",
      fullDescription: "JAKARTA, KOMPAS.com - Saat musim hujan yang berlangsung di banyak wilayah Indonesia seperti sekarang ini, ketersediaan air yang turun dari hujan tentu menjadi melimpah. Perlu kamu ketahui bahwa air hujan dapat membuat daun-daun tanaman menjadi hijau dan subur, hal ini dikarenakan adanya nitrogen bebas. Ketika musim hujan, sebenarnya ini menjadi waktu yang baik untuk menanam berbagai macam tanaman sayuran dan buah-buahan. Tanaman sayuran dan buah-buahan yang ditanam saat musim hujan membuat umurnya jadi lebih singkat untuk tumbuh, sekaligus memiliki tingkat ketahanan yang tinggi terhadap ketersediaan air yang melimpah. Seperti yang dilihat dari kanal Youtube Le Toen, Senin, (08/2/2021), berikut ini beberapa tanaman sayur yang cocok ditanam saat musim hujan.",
      service: "Pertanian",
      duration: "20 menit",
      author: "Abdul Haris Maulana, Sakina Rakhma Diah Setiawan",
      location: "Indonesia",
      image_path: "https://asset.kompas.com/crops/cr6KoDqCrbtAIzMxscml3RCPayI=/100x0:945x563/1200x800/data/photo/2020/07/02/5efccd6a31d12.jpg",
      sources: "KOMPAS.com",
      date: "11-12-2024"
    }
  ];

  return (
    <div className={`${horizontalSpace} lg:px-28 bg-primary-green  ${spaceBetweenSection} `}>
      <h1 className='md:text-3xl xl:text-5xl mb-16 text-xl font-bold'>
        Artikel terkait tips merawat tanaman & perawatan berdasarkan cuaca
      </h1>
      <div className='grid gap-12'>
        {articles.map((article) => (
          <div key={article.id} className='gap-9 flex flex-col'>
            <article className='md:flex-row bg-primary-green flex flex-col overflow-hidden duration-300 rounded-lg'>
              <div className='xl:w-1/3'>
                <img
                  src={article.image_path}
                  alt={article.title}
                  className='xl:h-full object-cover w-full h-48'
                />
              </div>
              <div className='md:w-full xl:w-2/3 flex flex-col justify-between px-6'>
                <div className='md:w-2/3 mt-4'>
                  <h2 className='md:text-2xl xl:text-4xl mb-2 text-4xl font-semibold'>{article.title}</h2>
                  <p className='mb-4 text-gray-600'>{article.shortDescription}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>{article.date}</span>
                  <Link to={`/artikel/${article.id}`}>
                    <button>Baca selengkapnya →</button>
                  </Link>
                </div>
              </div>
            </article>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}