import React from 'react';

import { FaFacebook } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer class='text-center'>
      <a class='up-arrow' href='#myPage' data-toggle='tooltip' title='TO TOP'>
        <span class='glyphicon glyphicon-chevron-up'></span>
      </a>
      <p>
        Bootstrap Theme Made By{' '}
        <a
          href='https://www.w3schools.com'
          data-toggle='tooltip'
          title='Visit w3schools'
        >
          <FaFacebook></FaFacebook>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
