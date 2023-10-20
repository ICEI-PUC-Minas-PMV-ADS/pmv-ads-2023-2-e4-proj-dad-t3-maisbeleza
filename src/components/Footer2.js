import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© Mais Beleza, 2023</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#81007F',
    color: 'white',
    textAlign: 'center',
    bottom: 0,
    width: '100%',
    marginBottom: '0',
    paddingTop: '10px',
    paddingBottom: '1px',
    position: 'fixed',
  },
};

export default Footer;