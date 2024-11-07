import { Separator } from '@/src/components/ui/separator';
import { articles } from '@/src/data/articles/articles';
import { horizontalSpace, spaceBetweenSection } from '@/src/styles/style';
import { Link } from 'react-router-dom';

export default function ArticleList() {
  return (
    <div className={`${horizontalSpace} lg:px-28 bg-primary-green  ${spaceBetweenSection} `}>
      <h1 className='md:text-3xl mb-8 text-xl font-bold'>
        Artikel terkait tips merawat tanaman & perawatan berdasarkan cuaca
      </h1>
      <div className='grid gap-12'>
        {articles.map((article) => (
          <div key={article.id} className='gap-9 flex flex-col'>
            <article className='md:flex-row bg-primary-green flex flex-col overflow-hidden duration-300 rounded-lg'>
              <div className='md:w-1/3'>
                <img
                  src={article.image}
                  alt={article.title}
                  className='md:h-full object-cover w-full h-48'
                />
              </div>
              <div className='md:w-2/3 flex flex-col justify-between px-6'>
                <div>
                  <h2 className='mb-2 text-xl font-semibold'>{article.title}</h2>
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
