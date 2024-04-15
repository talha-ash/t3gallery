const mockUrls = [
  "https://utfs.io/f/908bcdb3-8dc6-4c26-8aaa-3b15fc74d252-2629l.png",
  "https://utfs.io/f/6ac90265-7ceb-45f1-a10b-17ad28af7ae3-n5psat.jpg",
  "https://utfs.io/f/e7789f9e-3db9-4f9d-a3b7-f961c7321d12-1y626.jpeg",
  "https://utfs.io/f/df7c9bde-128b-4e16-868c-def3b5ea44d2-ik7ibm.jpg",
  "https://utfs.io/f/3df34a88-2ba9-495b-acea-8177e04acbff-d737y3.jpg",
  "https://utfs.io/f/1f31205c-10bd-4366-8334-0305c41ec14e-79rnfn.jpg",
  "https://utfs.io/f/b44e8b2b-2a73-4e86-9364-01ec9d30b9a6-2c3g.jpg",
];

const mockImages = [...mockUrls, ...mockUrls, ...mockUrls].map(
  (url, index) => ({
    id: index + 1,
    url,
  }),
);
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
