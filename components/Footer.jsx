
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Your Shop Name. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <p>
              <a href="https://github.com/mesuhailpm/stocks" target="_blank" rel="noopener noreferrer">
                Source
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
