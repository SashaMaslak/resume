import styled from 'styled-components';

export const ItemExpStyled = styled.li`
  display: grid;
  grid-template-columns: minmax(36px, 96px) minmax(36px, 96px) auto;
`;

export const DateColumn = styled.section`
  padding: 8px 4px;
  font-weight: bold;
`;

export const LineColumn = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LineStyled = styled.span`
  display: block;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 50%;
  border: #595a5a solid 3px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CircleStyled = styled.span`
  display: block;
  width: 2px;
  height: 100%;
  background-color: #595a5a;
`;

export const InfoColumn = styled.section`
  padding: 8px 8px 8px 12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const TitleExp = styled.h4`
  margin-right: 16px;
`;

export const IconPerson = styled.span`
  position: relative;
  cursor: pointer;
  :before,
  :after {
    display: block;
    position: absolute;
    left: -28px;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity 0.7s;
    -moz-transition: opacity 0.7s;
    transition: opacity 0.7s;
  }
  :before {
    bottom: 20px;
    margin-left: 0px;
    padding: 2px;
    left: 0;
    width: 110px;
    font-size: 0.75em;
    color: #fff;
    text-align: center;
    background-color: rgba(41, 45, 45, 0.8);
    border-radius: 4px;
    content: attr(data-title);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  :after {
    content: '';
    border-top: 6px solid rgba(41, 45, 45, 0.8);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    bottom: 14px;
    margin-left: 40px;
  }
  :hover:before,
  :hover:after {
    visibility: visible;
    opacity: 1;
  }
`;

export const TechList = styled.ul`
  list-style-type: disc;
`;
