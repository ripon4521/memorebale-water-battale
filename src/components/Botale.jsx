const Botale = ({botale, handlePurchase }) => {
    const {name, price, img} = botale;
  return <div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className=" text-center">
      {name}
      
    </h2>
    <p>Price: {price}Tk</p>
    <button onClick={() =>handlePurchase(botale)}>Purchase</button>
    
  </div>
</div>
  </div>;
};

export default Botale;
