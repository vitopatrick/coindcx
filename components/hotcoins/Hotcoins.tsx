"use client";

import { formatCurrency } from "@/utils/formatCurrency";
import Spinner from "../loaders/Spinner";
import { useFetchAllCoins } from "@/hooks/useFetchAllCoins";

export default function HotCoins() {
  const { coins, loading } = useFetchAllCoins(10);

  console.log(coins);
  return (
    <div className="bg-bg rounded font-body text-white flex-1 w-full p-4">
      <div>
        <div>
          <h1 className="underline text-xl">Hot Coins</h1>
        </div>
        <div>
          {loading && <Spinner />}
          {!loading && (
            <div>
              <div className="flex items-center justify-between mt-3 bg-sideBar py-3 px-2 rounded">
                <div className="font-sec font-bold text-paper">Coin</div>
                {/* <div className="font-sec font-bold text-paper bg-red-500">
                  Change 24H
                </div> */}
                <div className="font-sec font-bold text-paper">Price</div>
              </div>
              {coins.map((coin: any) => (
                <div
                  key={coin.id}
                  className="flex items-center my-9 justify-between py-3 px-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[8%]">
                      <img src={coin.img} />
                    </div>
                    <div>
                      <h2 className="font-sec text-neutral-400 font-bold">
                        {coin.name}
                      </h2>
                      <h2 className="font-sec uppercase text-paper font-bold">
                        {coin.symbol}
                      </h2>
                    </div>
                  </div>
                  {/* <div className="bg-red-300">hello</div> */}
                  <div>{formatCurrency(coin.currentPrice)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
