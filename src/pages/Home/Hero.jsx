import { horizontalSpace, spaceBetweenSection } from '../../styles/style';

export default function Hero() {
  return (
    <div className={`${spaceBetweenSection} ${horizontalSpace}`}>
      <h1>This Is Hero</h1>
    </div>
  );
}
