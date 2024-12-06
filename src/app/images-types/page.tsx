export default function Page() {
  return (
    <>
      <div className="flex items-start gap-2 flex-col my-3">
        <h1 className="text-2xl font-bold">
          Ceci est une comparaison entre différents types d'images et le temps
          de chargement
        </h1>
        <p className="text-md">
          Nous avons 3 types d'images : JPG, PNG et WebP. Nous allons les
          comparer
        </p>
      </div>
      <div className="flex items-center gap-2 flex-col mb-3">
        <ImageJPG />
        <ImagePNG />
        <ImageWebP />
      </div>
    </>
  );
}

function ImageJPG() {
  return (
    <div className="flex items-start gap-2 flex-col">
      <img
        src="https://i.ibb.co/hV5PLbg/image.jpg"
        alt="JPG"
        className="rounded"
      />
      <div className="flex justify-between w-full">
        <p className="text-sm mt-2">JPEG: Joint Photographic Experts Group</p>
        <p className="text-sm mt-2">22.23 ms</p>
      </div>
    </div>
  );
}

function ImagePNG() {
  return (
    <div className="flex items-start gap-2 flex-col">
      <img
        src="https://i.ibb.co/M1DMGHP/image.png"
        alt="PNG"
        className="rounded"
      />
      <div className="flex justify-between w-full">
        <p className="text-sm mt-2">PNG: Portable Network Graphics</p>
        <p className="text-sm mt-2">31.55 ms</p>
      </div>
    </div>
  );
}

function ImageWebP() {
  return (
    <div className="flex items-start gap-2 flex-col">
      <img
        src="https://i.ibb.co/Nn5Kg8S/image.webp"
        alt="WebP"
        className="rounded"
      />
      <div className="flex justify-between w-full">
        <p className="text-sm mt-2">WebP: Web Picture</p>
        <p className="text-sm mt-2">35.21 ms</p>
      </div>
    </div>
  );
}
