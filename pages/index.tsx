import Image from "next/image";

import hero from "@/public/assets/Hero Section.png";
import {PROPERTYLISTINGSAMPLE} from "@/constants";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";




export default function Home() {
  return (
    <div className="w-full px-10 py-3">
      {/* Hero section */}
      <div>
        <Image src={hero} alt="Hero section" />
      </div>

        {/* Filter section*/}
      <div>

      </div>

        {/* Pill section */}
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property,idx) => (
                <Card name={property.name} address={property.address} rating={property.rating} category={property.category} price={property.price} offers={property.offers} image={property.image} discount={property.discount} />
            ))}
        </div>

        {/* Show more section */}
        <div className="flex flex-col items-center  px-5 py-16 text-center">
            <Button title="Show more" color="bg-black text-white" />
            <h4 className="pt-2">Click to see more listings</h4>
        </div>
    </div>
  );
}
