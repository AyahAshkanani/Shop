
const Home = () => {
return (
    <div>
   
    <h1 className="text">Welcome to Sinful!!</h1>
      <h4 className="text">A place where you can taste a piece of heaven</h4>
      <img
        id="shop-image"
        alt="shop"
        src="data:image/jpeg;base64,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"
      />
  </div>

);
};

export default Home;