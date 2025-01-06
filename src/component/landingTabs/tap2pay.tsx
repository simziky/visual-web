import nfc from "../../assets/png/nfc.jpg"
const Tap2Pay = () => {
  return (
    <section className="grid items-center justify-between gap-20 pt-5 md:flex">
      <div className="order-2 w-full h-full md:w-1/2 md:order-1">
        <h3 className="text-2xl font-bold ">Business is Now Digital</h3>
        <p className="mt-5 ">
        Tap2Pay solution is an integrated ticketing system that allows cardholders to use a single card to travel on any public transport systems and make purchases at retail outlets that accepts Tap2Pay.
        Tap2Pay leverages on the NFC Technology to provide payment solutions for all sorts of situations.
        </p>

        <div className="flex gap-10 mt-5 md:mt-20 ">
        <h2 className="text-2xl font-extrabold text-gray-300 md:text-5xl">COMING SOON ...</h2>
          
        </div>
       

      </div>

      <div className="order-1 md:order-2  h-[250px] md:h-[400px] inline-flex md:justify-start md:w-1/2 w-full">
        <img src={nfc} alt="image" className="h-full " />
      </div>
    </section>
  );
};

export default Tap2Pay;
