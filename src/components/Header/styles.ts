import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${(props) => props.theme['yellow-500']};
  }

  img {
    max-width: 9rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-900']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: border 0.2s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['blue-500']};
      }

      &.active {
        color: ${(props) => props.theme['blue-500']};
      }
    }
  }
`;
