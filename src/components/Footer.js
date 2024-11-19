import "./Footer.css";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo-container">
            <img
              className="footer-logo"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt=""
            />
            <p className="footer-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <ul className="footer-social">
              {/* Add your social media icons here */}
            </ul>
          </div>
          {/* Add additional footer columns */}
        </div>
        <hr className="footer-divider" />
        <p className="footer-copyright">
          © Copyright 2021, All Rights Reserved by Postcraft
        </p>
      </div>
    </section>
  );
}

export default Footer;
