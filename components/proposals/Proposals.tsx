import Image from 'next/image';

const Card = ({ imageSrc, alt, title, description }) => {
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

export const CardList = () => {

    const cards = [
        {
          id: 1,
          imageSrc: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          alt: 'Card 1',
          title: 'Card 1 title',
          description: 'Card 1 description',
        },
        {
          id: 2,
          imageSrc: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          alt: 'Card 2',
          title: 'Card 2 title',
          description: 'Card 2 description',
        },
        {
          id: 3,
          imageSrc: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          alt: 'Card 3',
          title: 'Card 3 title',
          description: 'Card 3 description',
        },
        {
          id: 4,
          imageSrc: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          alt: 'Card 4',
          title: 'Card 4 title',
          description: 'Card 4 description',
        },
      ];
      
      return (
        <div>
          <h2 className="text-center text-2xl font-bold mb-8 mt-8">Propuestas</h2>
          <div className="flex flex-wrap -mx-4">
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      );
      
};
export default CardList
