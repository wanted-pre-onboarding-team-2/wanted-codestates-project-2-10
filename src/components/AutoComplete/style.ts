import styled from 'styled-components';

export const Wrapper = styled.div<{ width: number | string }>`
  position: relative;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 42px;
  background-color: #ffffff;
  width: 100%;
  height: 60px;
  padding: 20px 0px 20px 24px;
  box-sizing: border-box;
  flex: 1;
  @media (max-width: 1040px) {
    height: 35px;
  }
`;

export const Input = styled.input`
  border: 0;
  background-color: transparent;
  padding: 5px 0px 5px 5px;
  box-sizing: border-box;
  height: 35px;
  outline: none;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: 400;
  flex-grow: 1;
`;

export const Btn = styled.button`
  border-width: 0;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  background-color: #007be9;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 18px;
  padding-bottom: 18px;
  cursor: pointer;
  height: 60px;
  @media (max-width: 1040px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  border-radius: 22px;
  background-color: #ffffff;
  top: 70px;
  padding: 10px;
  list-style: none;
  z-index: 100;
  box-sizing: border-box;
  position: absolute;
`;

export const Li = styled.li<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? 'lightgray' : 'transparent')};
  font-size: 1.125rem;
  width: 100%;
  padding: 10px 0px;
  margin: 0;
  box-sizing: border-box;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const Text = styled.h4`
  font-size: 0.8rem;
  color: lightgray;
  margin-bottom: 10px;
`;
