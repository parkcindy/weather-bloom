import ContactForm from '@/src/components/contact-form/contactForm';
import { horizontalSpace, spaceBetweenSection } from '@/src/styles/style';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contacts() {
  return (
    <section className='w-full h-full'>
      <div className={`max-w-6xl mx-auto ${spaceBetweenSection} ${horizontalSpace} `}>
        <div className='md:flex-row flex flex-col gap-12'>
          <div className='flex-1'>
            <h1 className='mb-8 text-4xl font-bold'>Hubungi Kami</h1>
            <div className='space-y-6'>
              <div className='flex items-start gap-3'>
                <MapPin className='w-6 h-6 text-[#8B9D5D] mt-1' />
                <div>
                  <p className='font-semibold'>Alamat :</p>
                  <p>Batam,30 30030203r</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Mail className='w-6 h-6 text-[#8B9D5D] mt-1' />
                <div>
                  <p className='font-semibold'>Email :</p>
                  <p>info@agertech.com</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <Phone className='w-6 h-6 text-[#8B9D5D] mt-1' />
                <div>
                  <p className='font-semibold'>Telepon :</p>
                  <p>+666 666</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
