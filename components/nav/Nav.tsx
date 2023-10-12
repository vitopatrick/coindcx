import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-50">
      {/* container for the navigation bar */}
      <section className="w-[95%] md:w-4/5 mx-auto py-5">
        {/* flex container */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src="/Logo_CoinDCX.svg" alt="s" />
          </Link>
          <div className="space-x-3 font-body">
            <Link
              href="/login"
              className="uppercase border hidden md:inline-block border-orange-600 rounded-lg px-6 py-2 text-orange-600"
            >
              Login
            </Link>
            <Link
              href="/get-started"
              className="uppercase bg-orange-600 text-white px-6 py-2 rounded-lg"
            >
              Register
            </Link>
          </div>
        </div>
        {/* end of flex container */}
      </section>
      {/* end of container for the navigation bar */}
    </nav>
  );
}
