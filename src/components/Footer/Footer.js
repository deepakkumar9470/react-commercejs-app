import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer>
      <p>
        All &copy; copy rights are reserved to Dcommerce Shopping  {fullYear}
      </p>
    </footer>
  );
};

export default Footer;