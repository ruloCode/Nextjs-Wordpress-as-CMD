import Image from 'next/image';

export const Card = ({ imageSrc, alt, title, description }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div className="border rounded-md overflow-hidden">
          <div className="relative h-0 pb-[56.25%]">
            <Image
              src={imageSrc}
              alt={alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  export default Card