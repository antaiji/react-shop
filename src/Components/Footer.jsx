import React from "react";

function Footer() {
  return (
    <footer className="page-footer blue darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="blue-text text-lighten-4 right"
            href="https://github.com/antaiji/react-shop"
            target="_blank"
            rel="norefferer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
