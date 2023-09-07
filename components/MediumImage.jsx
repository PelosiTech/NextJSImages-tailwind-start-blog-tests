import Image from 'next/image';
import CarWashTunnel from "../public/static/images/CarWashTunnel.jpg";

export default function MediumImage() {
  return (
    <div className="w-[600px] h-[800px] m-6 flex justify-center items-center">
      <div className="w-1/2 relative overflow-hidden rounded-xl shadow-2xl transition-all transform hover:shadow-3xl p-6 bg-white">
        <Image
          src={CarWashTunnel}
          alt="Premium Car Wash"
          objectFit="cover"
        />
        <h3 className="text-xl font-bold mt-3 mb-2">Premium Car Wash</h3>
        <p className="text-sm mb-3">
          Experience our top-tier car cleaning service. Combining the power of advanced cleaning tools and eco-friendly solutions, we bring out the best in your vehicle.
        </p>
        <ul className="text-sm space-y-1 mb-4">
          <li>- Full exterior and interior detailing</li>
          <li>- Undercarriage wash</li>
          <li>- Triple foam polish</li>
          <li>- Tire shine & conditioning</li>
          <li>- Leather seat conditioning</li>
        </ul>
        <div className="mt-4 text-xl font-bold">$59.99</div>
      </div>
    </div>
  );
}
