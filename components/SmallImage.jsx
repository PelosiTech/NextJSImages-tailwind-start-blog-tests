import Image from 'next/image';
import UnlimitedWashes from "../public/static/images/UnlimitedWashes.jpg";

const SmallImage = () => {
  return (
    <div className="w-[300px] h-[400px] m-4 flex justify-center items-center">
      <div className="w-[250px] overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4 bg-white">
        <Image
          src={UnlimitedWashes}
          alt="Basic Car Wash"
          objectFit="cover"
        />
        <h3 className="text-lg font-bold mt-2 mb-1">Basic Car Wash</h3>
        <ul className="text-sm space-y-1">
          <li>- Exterior wash & wax</li>
          <li>- Wheel cleaning</li>
          <li>- Window cleaning</li>
          <li>- Interior vacuum</li>
        </ul>
        <div className="mt-4 text-lg font-bold">$19.99</div>
      </div>
    </div>
  );
}

export default SmallImage;
