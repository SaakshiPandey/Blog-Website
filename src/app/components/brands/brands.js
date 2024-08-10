import Image from 'next/image';

export default function Brands() {
  return (
    <div className="bg-black py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-400">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Transistor"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Reform"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Tuple"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="SavvyCal"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-10 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-10 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
