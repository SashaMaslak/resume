import { Photo } from './Avatar.styled';

const Avatar = ({ src, alt }) => {
  return (
    <>
      <Photo src={src} alt={alt} />
    </>
  );
};

export default Avatar;
