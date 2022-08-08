import { NavBar } from 'components/navigation/navbar/NavBar';
import { LogoWithStrapline } from './Logo';

export const Header = () => {
  return (
    <>
      <NavBar logo={<LogoWithStrapline />} />
    </>
  );
};
