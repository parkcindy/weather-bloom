import { horizontalSpace, spaceBetweenSection } from '@/src/styles/style';
import image1 from '@/src/assets/visi-image.png';
import image2 from '@/src/assets/misi-image.png';

export default function KnowsUs() {
  return (
    <div className={`w-full mx-auto ${spaceBetweenSection} ${horizontalSpace} bg-secondary-green `}>
      <section className='mb-20 text-center'>
        <h1 className='text-4xl font-bold text-[#8B9D5D] mb-6'>Kenali Kami</h1>
        <p className='max-w-3xl mx-auto text-gray-700'>
          Selamat datang di Website Weather and Bloom, website ini berkomitmen untuk menyediakan
          informasi terkini tentang cuaca pada setiap musim yang digunakan untuk bercocok tanam,
          dengan berbasis di website ini dapat menemukan informasi yang akurat. kami hadir untuk
          membantu anda memahami cuaca dan dunia pertanian dengan lebih baik.
        </p>
      </section>

      <section className='md:px-48 mb-20'>
        <div className='md:flex-row md:gap-28 flex flex-col items-center gap-12'>
          <div className='flex-1'>
            <h2 className='text-3xl font-bold text-[#F3B664] mb-6'>Visi Kami</h2>
            <p className='text-gray-700'>
              Di Weather & Bloom, kami memiliki visi di mana setiap orang dapat memanfaatkan data
              cuaca untuk menumbuhkan dan merawat lingkungan mereka dengan lebih efektif. Saat anda
              bercocok tanam, keadaan ekonomi, atau kesehatan yang perlu kita jaga, kami berkomitmen
              untuk memberikan solusi yang akurat dan tepat untuk membantu Anda membuat keputusan
              yang tepat.
            </p>
          </div>
          <div className='flex-1'>
            <img src={image1} alt='Small plants in pots' className='rounded-lg shadow-lg' />
          </div>
        </div>
      </section>

      <section>
        <div className='md:flex-row-reverse md:gap-28 md:px-48 flex flex-col items-center gap-12'>
          <div className='flex-1'>
            <h2 className='text-3xl font-bold text-[#8B7355] mb-6'>Misi Kami</h2>
            <p className='text-gray-700'>
              Menyediakan informasi cuaca yang akurat dan mudah diakses, disertai dengan prediksi
              dan rekomendasi untuk kegiatan pertanian. Membangun komunitas petani yang saling
              berbagi pengalaman, praktik terbaik, dan saran yang dapat membantu dalam mengembangkan
              hasil pertanian.
            </p>
          </div>
          <div className='flex-1'>
            <img src={image2} alt='Fresh vegetables harvest' className='rounded-lg shadow-lg' />
          </div>
        </div>
      </section>
    </div>
  );
}
