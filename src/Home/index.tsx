import { Header } from '../components/Header';
import { SearchCountry } from '../components/SearchCountry';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <SearchCountry />
    </HomeContainer>
  );
}
