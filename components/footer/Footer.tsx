"use client";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-50">
      {/* Container */}
      <div className="w-[80%] mx-auto">
        <h4 className="font-body uppercase font-semibold mb-3">DISCLAIMER</h4>
        <div>
          <p className="font-body capitalize text-neutral-400 leading-loose text-xs">
            The information and material contained herein are subject to change
            without prior notice including prices which may fluctuate based on
            market demand and supply. The material available on the site is
            proprietary to CoinDCX, its parent, Licensor and/or its affiliates
            and is for informational purposes and informed investors only. This
            material is not: (i) an offer, or solicitation of an offer, to
            invest in, or to buy or sell, any interests or shares, or to
            participate in any investment or trading strategy, or (ii) intended
            to provide accounting, legal, or tax advice, or investment
            recommendations. Note Crypto products and NFTs are unregulated and
            can be highly risky. There may be no regulatory recourse for any
            loss from such transactions.
          </p>
          {/* List */}
          <ul className="font-body text-xs space-y-3 text-neutral-400 mt-4">
            <li>*Data sourced from Looker app as on 01st May,2023</li>
            <li>*Data as on 01st May,2023</li>
            <li>
              *Quarterly trading volume for Q4 FY'22. Currency conversion rate
              applied as in data capturing period
            </li>
            <li>*FIU Registered entity, NEBLIO TECHNOLOGIES PVT LTD</li>
            <li>*Certified in India for May 2023-24</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
