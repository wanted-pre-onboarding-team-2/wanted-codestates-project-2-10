import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cae9ff;
  display: flex;
  align-items: center;
  padding-top: 300px;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 660px;
  box-sizing: border-box;
  @media (max-width: 1040px) {
    width: 100%;
    padding: 0px 20px;
  }
`;
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const H1 = styled.h1`
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  @media (max-width: 1040px) {
    font-size: 1.25rem;
  }
`;
