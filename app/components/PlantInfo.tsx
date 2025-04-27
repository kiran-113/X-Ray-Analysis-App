import { XrayInfoProps } from "@/types/types";
import Image from "next/image";
import Table from "./common/Table";

export default function XrayInfo({ info, imageUrl }: XrayInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-8">
        {imageUrl && (
          <div className="md:w-1/2">
            {/* Aspect ratio container for responsive images */}
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt="Uploaded xray"
                className="object-cover"
                layout="responsive" // Ensures responsive behavior
                width={600} // Original width
                height={450} // Original height (adjust according to aspect ratio)
              />
            </div>
          </div>
        )}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-green-700">
            {info.potentialDiagnosis || "X-ray Information"}
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            {info.detectedAbnormalities || "No abnormalities detected."}
          </p>
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <Table info={info} />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          Recommendations
        </h3>
        <p className="text-gray-700 leading-relaxed">{info.recommendations}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-green-600">
          Additional Observations
        </h3>
        <p className="text-gray-700 leading-relaxed">{info.additionalObservations}</p>
      </div>
    </div>
  );
}