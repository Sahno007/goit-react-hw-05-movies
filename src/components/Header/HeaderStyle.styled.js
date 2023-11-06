import { styled } from 'styled-components';

export const HeaderStyle = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  column-gap: 40px;
  border-bottom: 1px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;