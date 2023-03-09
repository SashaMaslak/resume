import styled from 'styled-components';

export const LinkItem = styled.li`
  &:hover {
    cursor: pointer;
    color: #8c52ff;
    font-weight: bold;
    svg {
      color: #8c52ff;
    }
  }
`;

export const StyledItem = styled.li`
  display: flex;
`;

export const IconWrapper = styled.span`
  display: block;
  background: #292d2d;
  margin: 2px 4px;
  border-radius: 4px;
  padding: 0px;
  width: 36px;
  height: 36px;
  svg {
    color: #f4d644;
    display: block;
    padding: 4px;
  }
`;

export const ContactTitleText = styled.p`
  color: #292d2d;
  font-size: 16px;
  font-weight: bold;
  line-height: 120%;
`;

export const ContactText = styled.p`
  font-size: 16px;
  line-height: 110%;
`;

export const ContactWrapper = styled.p`
  padding: 0px;
`;
