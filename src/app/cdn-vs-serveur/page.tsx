export default function Page() {
  return (
    <>
      <div className="flex items-start gap-2 flex-col my-3">
        <h1 className="text-2xl font-bold">CDN vs Serveur</h1>
        <p className="text-md">
          Utiliser un seul serveur pour stocker des images peut être lourd pour
          un seul serveur, c'est pourquoi nous utilisons un CDN pour stocker des
          images et d'autres fichiers statiques.
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
      <img
        src="https://i.ibb.co/wLQ9rK4/logo.png"
        alt="PNG"
        className="rounded"
      />
      <div className="flex justify-between w-full">
        <p className="text-sm mt-2">PNG: Portable Network Graphics</p>
        <p className="text-sm mt-2">22.24 ms</p>
      </div>
    </div>
  );
}
