import { Photo } from './Avatar.styled';

const Avatar = ({ src, alt, width }) => {
  return (
    <>
      <Photo src={src} alt={alt} width={width} height={377} />
    </>
  );
};

export default Avatar;
