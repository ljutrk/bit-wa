import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                © {currentYear} Copyright Text
          </div>
        </footer>
    );
}

export { Footer };