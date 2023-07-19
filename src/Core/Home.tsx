import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div className="main-container mx-auto">
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <Header />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
