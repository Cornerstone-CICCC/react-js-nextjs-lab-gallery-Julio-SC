import Image from 'next/image';
import Link from 'next/link';

async function fetchPhotos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
  const data = await res.json();

  return data.map((photo: any) => ({
    ...photo,
    thumbnailUrl: `https://placehold.co/300x300?text=%20`, // sin texto
    url: `https://placehold.co/600x600?text=%20`,           // sin texto
  }));
}

export default async function GalleryPage() {
  const photos = await fetchPhotos();

  return (
    <div>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo: any) => (
          <Link key={photo.id} href={`/gallery/${photo.id}`} className="flex flex-col items-center">
  <h2 className="text-xs text-white mb-2 text-center">{photo.title}</h2>
  <Image
    src={photo.thumbnailUrl}
    alt={photo.title}
    width={300}
    height={300}
    className="rounded hover:scale-105 transition-transform object-cover"
  />
</Link>
        ))}
      </div>
    </div>
  );
}
