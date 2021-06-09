import shopImage from '../dp.png'
const Home = () => {
return (
    <div>
   
    <h1 className="text">Welcome to Sinful!!</h1>
      <h4 className="text">A place where you can taste a piece of heaven</h4>
      <img
        id="shop-image"
        alt="shop"
        src={shopImage}
      />
  </div>

);
};

export default Home;