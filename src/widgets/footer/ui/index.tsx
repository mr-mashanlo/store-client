import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer aria-labelledby="footer-heading" className="py-9 bg-zinc-200/20">
      <p className="mb-40 font-bold text-center text-xs">Footer</p>
      <div className="px-2 sm:px-10 flex gap-10 items-center justify-between">
        <h2 id="footer-heading"><Link to="/" aria-label="Home">Logo</Link></h2>
        <nav aria-label="Footer Navigation">
          <ul className="flex gap-10 items-center">
            <li><a href="/address">Address</a></li>
            <li><a href="/contacts">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;