import './Nav.css';

const RESUME = '/assets/Michel_Vivier_Resume.pdf';

const links: [string, string][] = [
  ['#experience', 'Experience'],
  ['#report', 'Impact'],
  ['#casestudy', 'Case study'],
  ['#about', 'About'],
  ['#work', 'Work'],
  ['#contact', 'Contact'],
];

export default function Nav() {
  return (
    <header className="nav">
      <nav className="nav__inner">
        <a href="#home" className="nav__brand">
          <span className="nav__logo">MV</span>
          <span className="nav__name">Michel Vivier</span>
        </a>
        <div className="nav__links">
          {links.map(([href, label]) => (
            <a key={href} className="mv-navlink" href={href}>
              {label}
            </a>
          ))}
          <a className="nav__resume" href={RESUME} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
