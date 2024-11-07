import TeamIcon from '@/src/components/team-icon/teamIcon';
import { teams } from '@/src/data/teams/teams';

export default function Teams() {
  const [
    permata,
    jamilatun,
    lionel,
    galih,
    caesar,
    cindy,
    mahdiata,
    alviana,
    fransiskus,
    huilyana,
    feili,
    febriyanti,
  ] = teams;
  return (
    <div className='w-full max-w-2xl p-8 mx-auto'>
      <div className='flex flex-col items-center space-y-8'>
        {/* Root */}
        <TeamIcon {...permata} />
        <div className='gap-x-16 grid grid-cols-2'>
          <TeamIcon {...jamilatun} />
          <TeamIcon {...lionel} />
        </div>
        {/* Level 2 */}
        <div className='gap-x-16 grid grid-cols-3'>
          <TeamIcon {...galih} />
          <TeamIcon {...caesar} />
          <TeamIcon {...cindy} />
        </div>
        {/* Level 3 */}
        <div className='gap-x-16 grid grid-cols-3'>
          <TeamIcon {...mahdiata} />
          <TeamIcon {...alviana} />
          <TeamIcon {...fransiskus} />
        </div>
        {/* Level 4 */}
        <div className='gap-x-16 grid grid-cols-3'>
          <TeamIcon {...huilyana} />
          <TeamIcon {...feili} />
          <TeamIcon {...febriyanti} />
        </div>
      </div>
    </div>
  );
}
