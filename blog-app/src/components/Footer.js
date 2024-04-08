import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '4px', textAlign: 'center', position: 'fixed', left:0, bottom: 0, width: '100%' }}>
      <p>&copy; {new Date().getFullYear()} Made with ❤️ by <a href='https://in.linkedin.com/in/-renu-rao' style={{color: '#fff'}}>Renu Rao.</a></p>
    </footer>
  );
}

export default Footer;
