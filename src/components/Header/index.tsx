import { HeaderContainer } from './styles';
import { GlobeHemisphereWest, ListDashes } from 'phosphor-react';

import taskenlogo from '../../assets/tasken.png';

export function Header() {
  return (
    <HeaderContainer>
      <GlobeHemisphereWest size={32} className="logo" />

      <img src={taskenlogo} alt="" />
      <nav>
        <ListDashes size={24} />
      </nav>
    </HeaderContainer>
  );
}
