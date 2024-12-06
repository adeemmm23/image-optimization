export default function Page() {
  return (
    <>
      <div className="flex items-start gap-2 flex-col my-3">
        <h1 className="text-2xl font-bold">
          Lazy image, Le HTML a une optimisation pour le chargement paresseux
        </h1>
        <p className="text-md">
          Cela aide à ne charger que les images qui sont dans la fenêtre
          daffichage
        </p>
      </div>
      <div className="flex items-center gap-2 flex-col mb-3">
        <ImageLazyLoading value="/200/300" />
        <ImageLazyLoading value="/400/600" />
        <ImageLazyLoading value="/500/300" />
        <ImageLazyLoading value="/600/300" />
        <ImageLazyLoading value="/500/400" />
        <ImageLazyLoading value="/600/500" />
        <ImageLazyLoading value="/400/300" />
      </div>
    </>
  );
}

type ImageLazyLoadingProps = {
  value: string;
};
function ImageLazyLoading({ value }: ImageLazyLoadingProps) {
  return (
    <div className="flex items-start gap-2 flex-col">
      <img
        src={"https://picsum.photos" + value}
        alt="JPG"
        loading="lazy"
        className="rounded"
      />
    </div>
  );
}
