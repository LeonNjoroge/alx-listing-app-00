import Image from "next/image";

import hero from "@/public/assets/Hero Section.png";
import {PROPERTYLISTINGSAMPLE} from "@/constants";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";




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
        <div>
            {PROPERTYLISTINGSAMPLE.map((property,idx) => (
                <Card name={property.name} address={property.address} rating={property.rating} category={property.category} price={property.price} offers={property.offers} image={property.image} discount={property.discount} />
            ))}
        </div>
    </div>
  );
}
