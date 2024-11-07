export default function ContactForm() {
  return (
    <div className='flex-1'>
      <form className='bg-secondary-green p-6 rounded-lg'>
        <div className='md:grid-cols-2 grid grid-cols-1 gap-4 mb-4'>
          <div>
            <label htmlFor='firstName' className='block mb-2'>
              Nama Depan <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='firstName'
              required
              className='w-full px-3 py-2 border rounded-md'
            />
          </div>
          <div>
            <label htmlFor='lastName' className='block mb-2'>
              Nama Belakang <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='lastName'
              required
              className='w-full px-3 py-2 border rounded-md'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2'>
            Email <span className='text-red-500'>*</span>
          </label>
          <input type='email' id='email' required className='w-full px-3 py-2 border rounded-md' />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block mb-2'>
            Ada yang bisa kami bantu?
          </label>
          <textarea id='message' rows={4} className='w-full px-3 py-2 border rounded-md' />
        </div>
        <button
          type='submit'
          className='bg-[#8B9D5D] text-white px-6 py-2 rounded-md hover:bg-[#7A8B4B] transition-colors'
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
