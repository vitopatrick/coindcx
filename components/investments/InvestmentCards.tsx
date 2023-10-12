import investmentplans from "@/lib/investmentplans";
import Link from "next/link";

export default function InvestmentCards() {
  return (
    // parent div container
    <section className="p-3 md:grid md:grid-cols-3 gap-4 space-y-4 md:space-y-0">
      {investmentplans.map((plan) => (
        <div
          key={plan.name}
          className="bg-sideBar flex-1  space-y-4 rounded-lg p-3 hover:shadow-main transition-all hover:shadow-sm ease-in-out hover:border hover:border-main "
        >
          <h4 className="text-neutral-400 md:text-2xl text-2xl font-header font-semibold">
            {plan.name}
          </h4>
          {plan.bonus && (
            <>
              <h4 className="text-neutral-200 text-4xl font-header font-bold">
                {plan.range}
              </h4>
              <p className="font-header text-neutral-400">Bonus:{plan.bonus}</p>
              <p className="font-header text-neutral-400">
                Duration:{plan.duration}
              </p>
            </>
          )}
          <div className="py-5">
            <Link
              href="/dashboard/deposit"
              className="bg-main rounded-lg px-4 py-3 w-full font-header text-white font-bold"
            >
              Get started
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
