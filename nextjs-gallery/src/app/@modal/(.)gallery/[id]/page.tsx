import Image from 'next/image';

async function getPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    ...photo,
    url: `https://placehold.co/600x600?text=%20`,
  };
}

export default async function ModalPage({
  params,
}: {
  params: { id: string };
}) {
  const photo = await getPhoto(params.id);

  return (
<div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40 p-4">


      <div className="bg-white p-6 rounded shadow-xl w-[90%] max-w-xl text-black">
        <h2 className="text-xl font-bold mb-4 text-center">{photo.title}</h2>
        <Image
          src={photo.url}
          alt={photo.title}
          width={600}
          height={600}
          className="rounded"
        />
      </div>
    </div>
  );
}
