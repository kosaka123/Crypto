import Layout from "../../components/Layout";

function Coin({ coin }) {
  return (
    <Layout>
      <div className=" flex justify-center  items-center">
        <div className="flex flex-col justify-center items-center border-2 bg-white border-blue-400 rounded-xl p-16 w-96">
          <img src={coin.image.large} alt={coin.name} className=" mb-4" />
          <h1 className=" mb-4">{coin.name}</h1>
          <p className=" mb-4">{coin.symbol}</p>
          <p className="mb-4 text-4xl">{coin.market_data.current_price.usd}</p>
        </div>
      </div>
    </Layout>
  );
}

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
