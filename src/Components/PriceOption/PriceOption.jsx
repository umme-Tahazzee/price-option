
import Feature from './../Feature/Feature';

const PriceOption = ({ option }) => {
  const { name, price_per_month, features } = option;
  return (
    <div className="bg-blue-300 rounded-lg p-5
     text-white ">
      <h2 className="text-center font-serif">
        <span className="text-5xl font-extrabold">{price_per_month}</span>
        <span className="text-xl">/mon</span>

      </h2>
      <h4 className="text-2xl text-center my-4">{name}</h4>
      <div className='pl-6'>
      {
        features.map((feature, idx)=><Feature key={idx}  feature={feature}/>)
       
      }
      <button className='mt-12 bg-green-600 w-full font-semibold p-4  rounded-md cursor-pointer 
      hover:bg-blue-500'>Buy Now</button>
      </div>
  
    </div>
  );
};

export default PriceOption;
