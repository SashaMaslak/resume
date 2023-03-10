import styled from 'styled-components';

export const SideBarStyled = styled.div`
  background-color: #292d2d;
  padding: 32px 32px 32px 64px;
  @media screen and (max-width: 961px) {
    padding: 32px;
  }
`;

export const TitleSkills = styled.h3`
  color: #fff;
  font-size: 24px;
`;

export const TitleItemSkills = styled.h4`
  color: #fff;
`;

export const ListSkills = styled.ul`
  padding-left: 20px;
`;

export const ItemSkills = styled.li`
  color: #a6a6a6;
  font-weight: 500;
  line-height: 140%;
  list-style: none;
`;

export const ItemLink = styled.a`
  color: #a6a6a6;
  font-weight: 500;
  line-height: 140%;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #8c52ff;
  }
`;
