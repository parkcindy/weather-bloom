import React from 'react';
import ArticleSidebar from '@/src/components/article-sidebar/ArticleSidebar';
import { horizontalSpace, spaceBetweenSection } from '@/src/styles/style';
import { useParams } from 'react-router-dom';

const articles = [
  {
    id: 1,
    image: "https://asset.kompas.com/crops/cr6KoDqCrbtAIzMxscml3RCPayI=/100x0:945x563/1200x800/data/photo/2020/07/02/5efccd6a31d12.jpg",
    title: "6 Tanaman Sayuran yang Cocok Ditanam Saat Musim Hujan",
    fullDescription: 'Berikut adalah panduan merawat tanaman indoor...\nPoin penting lainnya.',
    service: "Pertanian",
    duration: "20 menit",
    author: "Abdul Haris Maulana, Sakina Rakhma Diah Setiawan",
    location: "Indonesia",
    date: "11-12-2024"
  },
  // Artikel lainnya bisa ditambahkan di sini
];

export default function Article() {
  const { id } = useParams();
  // Cari artikel sesuai id yang ada di URL
  const articleDetail = articles.find((article) => article.id === parseInt(id));

  // Jika artikel tidak ditemukan
  if (!articleDetail) return <p>Article not found</p>;

  return (
    <section className="w-full h-full">
      <div className={`${horizontalSpace} ${spaceBetweenSection}`}>
        <div className="relative">
          <div className="h-72 w-full md:h-[29rem] xl:h-[36rem]">
            <img
              className="size-full rounded-4xl md:rounded-5xl lg:rounded-7xl object-cover object-center"
              src={articleDetail.image}
              alt={articleDetail.title}
            />
          </div>
          <div className="md:pr-[300px]">
            <h1 className="md:text-3xl py-5 text-2xl font-bold leading-tight text-gray-900">
              {articleDetail.title}
            </h1>
            <div className="space-y-5">
              {articleDetail.fullDescription.split('\n').map((text, index) => (
                <div key={index} className="text-gray-500">
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <ArticleSidebar
            service={articleDetail.service}
            duration={articleDetail.duration}
            farmer={articleDetail.farmer}
            location={articleDetail.location}
          />
        </div>
      </div>
    </section>
  );
}
