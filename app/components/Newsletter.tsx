"use client";

export default function Newsletter() {
  return (
    <section className="w-full bg-white py-16 px-6 flex flex-col items-center justify-center text-black border-t border-gray-200">
      <h3 className="text-2xl font-replica text-track-cyan mb-8 uppercase text-center tracking-wide">
        ŽELITE VESTI I AŽURIRANJA O PROIZVODIMA?
      </h3>

      <form className="flex flex-col items-center w-full max-w-2xl gap-4">
        <div className="flex w-full">
          <input
            type="email"
            placeholder="Unesite vaš E-mail da se prijavite na naš Newsletter"
            className="flex-1 bg-gray-100 text-black px-6 py-4 outline-none border border-gray-300 focus:border-track-cyan transition-colors font-replica-light"
            required
          />
          <button
            type="submit"
            className="bg-track-cyan text-white px-8 py-4 font-replica hover:bg-[#4ab8db] transition-colors"
          >
            PRIJAVI SE
          </button>
        </div>

        <div className="flex items-center gap-3 self-start mt-2">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 accent-track-cyan cursor-pointer"
            required
          />
          <label htmlFor="terms" className="text-sm font-replica-light text-gray-600 cursor-pointer">
            Slažem se sa uslovima i pravilima korišćenja
          </label>
        </div>
      </form>
    </section>
  );
}
