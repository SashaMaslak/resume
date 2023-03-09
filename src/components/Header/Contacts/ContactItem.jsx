import { BsTelephoneInbound, BsEnvelope } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import {
  StyledItem,
  IconWrapper,
  ContactTitleText,
  ContactText,
  ContactWrapper,
  LinkItem,
} from './ContactItem.styled';

const ContactItem = ({ title, text }) => {
  return (
    <LinkItem href="URL">
      <StyledItem>
        <IconWrapper>
          {title === 'Phone:' && <BsTelephoneInbound size={28} />}
          {title === 'Email:' && <BsEnvelope size={28} />}
          {title === 'Address:' && <SlLocationPin size={28} />}
        </IconWrapper>
        <ContactWrapper>
          <ContactTitleText>{title}</ContactTitleText>
          <ContactText>{text}</ContactText>
        </ContactWrapper>
      </StyledItem>
    </LinkItem>
  );
};

export default ContactItem;
