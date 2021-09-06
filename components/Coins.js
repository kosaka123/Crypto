import Link from "next/link";

function Coins({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className="flex justify-center ">
          <div className="flex flex-row justify-start items-center h-20 border-black border-b-2  pt-0 pb-0 pr-8 pl-8 hover:bg-gray-700">
            <div className="flex items-center pr-6">
              <img src={image} alt={name} className=" h-8 w-8 mr-2" />
              <h1 className=" text-base w-40">{name}</h1>
              <p className=" uppercase">{symbol}</p>
            </div>

            <div className="flex text-right justify-between w-full">
              <p className=" w-24">${price}</p>
              <p className=" w-40">${volume.toLocaleString()}</p>
              {priceChange < 0 ? (
                <p className=" text-red-700">{priceChange.toFixed(2)}%</p>
              ) : (
                <p className=" text-green-700">{priceChange.toFixed(2)}%</p>
              )}
              <p className=" w-60">Mkt Cap:${marketcap.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Coins;
