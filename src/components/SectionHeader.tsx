import styled from '@emotion/styled';

type InverseProps = {
  inverse?: boolean;
};

export const SectionHeader = styled.header<InverseProps>`
  text-align: center;
  margin: 0 0 1rem 0;

  h2 {
    margin: 0;
    font: inherit;
    color: ${(props) => (props.inverse ? '#fff' : '#555')};
    line-height: 1.35rem;
    font-size: 1.4rem;
    font-weight: 200;

    @media (min-width: 480px) {
      font-size: 2rem;
      line-height: 2.9rem;
    }

    @media (min-width: 1140px) {
      font-size: 2.2rem;
      line-height: 3.15rem;
    }
  }

  :after {
    background: ${(props) => (props.inverse ? '#ffffff' : '#90909080')};
    content: '';
    display: inline-block;
    height: 1px;
    margin-top: 1.5rem;
    width: 6rem;
  }
`;
