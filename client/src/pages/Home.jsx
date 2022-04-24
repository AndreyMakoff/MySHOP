import React from 'react';
import NavBar from '../Components/NavBar';
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
// import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';
// import SearchAppBar from '../Components/NewNavbar';



const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      {/* <NewsLetter /> */}
      <Footer />
      
    </div>
  );
};

export default Home;
