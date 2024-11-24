export default function TeamIcon({ icon, name, role }) {
  return (
    <div className='flex flex-col items-center'>
      <img src={icon} alt={name} className='size-24 object-cover object-center' />
      <span className='mt-2 text-xs font-medium text-center'>{name}</span>
      <span className='mt-1 text-xs text-center text-gray-500'>{role}</span>
    </div>
  );
}
