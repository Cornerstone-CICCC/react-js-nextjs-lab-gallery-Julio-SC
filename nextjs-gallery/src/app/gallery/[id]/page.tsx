import Image from 'next/image';

async function getPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    ...photo,
    url: `https://placehold.co/600x600?text=%20`, 
  };
}

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const photo = await getPhoto(params.id);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center p-6">
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
