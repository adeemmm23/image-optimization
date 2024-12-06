import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex items-start gap-2 flex-col my-3">
        <h1 className="text-2xl font-bold">Image NextJs</h1>
        <p className="text-md">
          Next Image est un composant qui permet d'optimiser le chargement des
          images. Il permet de gérer la taille des images, le chargement des
          images optimisées, le chargement des images en fonction de la taille
          de l'écran.
        </p>
      </div>
      <div className="flex items-center gap-2 flex-col mb-3">
        <ImagePNG />
      </div>
    </>
  );
}

function ImagePNG() {
  return (
    <div className="flex items-start gap-2 flex-col">
      <Image
        src="https://i.ibb.co/wLQ9rK4/logo.png"
        alt="PNG"
        width={300}
        height={300}
        className="rounded"
      />
      <div className="flex justify-between w-full">
        <p className="text-sm mt-2">Image component</p>
        <p className="text-sm mt-2">15.19 ms</p>
      </div>
    </div>
  );
}
