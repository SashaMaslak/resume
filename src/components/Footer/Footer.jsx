import React from 'react';

const Footer = () => {
  return (
    <div>
      <a
        href="URL"
        style={{
          textDecoration: 'none',
        }}
      >
        <p
          style={{
            backgroundColor: '#292d2d',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#a6a6a6',
          }}
        >
          SashaMaslak © 2023
        </p>
      </a>
    </div>
  );
};

export default Footer;

// style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 28,
//           color: 'green',
//           outline: '1px solid grey',
//         }}
