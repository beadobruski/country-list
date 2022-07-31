import { HeaderContainer } from './styles';
import { GlobeHemisphereWest } from 'phosphor-react';

import taskenlogo from '../../assets/tasken.png';

export function Header() {
  return (
    <HeaderContainer>
      <GlobeHemisphereWest size={32} className="logo" />

      <img src={taskenlogo} alt="" />
    </HeaderContainer>
  );
}
