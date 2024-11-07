import ArticleSidebar from '@/src/components/article-sidebar/ArticleSidebar';
import { articles } from '@/src/data/articles/articles';
import { horizontalSpace, spaceBetweenSection } from '@/src/styles/style';
import { useParams } from 'react-router-dom';

export default function Article() {
  const { id } = useParams();
  const article = articles.filter((article) => article.id === Number(id))[0];

  return (
    <section className='w-full h-full'>
      <div className={`${horizontalSpace} ${spaceBetweenSection}`}>
        <div className='relative'>
          <div className='h-72 w-full md:h-[29rem] xl:h-[36rem]'>
            <img
              className='size-full rounded-4xl md:rounded-5xl lg:rounded-7xl object-cover object-center'
              src={article.image}
              alt={article.title}
            />
          </div>
          <div className='md:pr-[300px]'>
            <h1 className='md:text-3xl py-5 text-2xl font-bold leading-tight text-gray-900'>
              {article.title}
            </h1>
            <div className='space-y-5'>
              {article.fullDescription.split('\n').map((text, index) => {
                return (
                  <div key={index} className=' text-gray-500'>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <ArticleSidebar
            service={article.service}
            duration={article.duration}
            farmer={article.farmer}
            location={article.location}
          />
        </div>
      </div>
    </section>
  );
}
