import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer__layout">
        <div data-credit-button>
          <a href="#" className="button button--sp2">1 Credit =0.01 EUR </a>
        </div>
        <div className="footer__jackpot">
          <div className="footer__jackpot--gold">1 000 000 $</div>
          <div className="footer__jackpot--silver">1 000 000 $</div>
          <div className="footer__jackpot--bronze">1 000 000 $</div>
        </div>
        <a href="/login/login.html" className="button button--sp1">Logout</a>
      </div>
    </div>
  </div>    
);

export default Footer;