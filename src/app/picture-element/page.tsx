export default function Page() {
  return (
    <>
      <div className="flex items-start gap-2 flex-col my-3">
        <h1 className="text-2xl font-bold">Picture Element Responsive</h1>
        <p className="text-md">
          Picture Element est une balise HTML qui permet de gérer la
          responsivité des images
        </p>
      </div>
      <div className="flex items-center gap-2 flex-col mb-3">
        <PictureElement />
      </div>
    </>
  );
}

function PictureElement() {
  return (
    <div className="flex items-start gap-2 flex-col">
      <picture>
        <source
          srcSet="https://i.ibb.co/hV5PLbg/image.jpg"
          media="(max-width: 600px)"
        />
        <source
          srcSet="https://i.ibb.co/TRFsVcR/image2x.jpg"
          media="(max-width: 800px)"
        />
        <source
          srcSet="https://i.ibb.co/RCrnHkZ/image3x.jpg"
          media="(min-width: 800px)"
        />
        <img src="https://i.ibb.co/hV5PLbg/image.jpg" />
      </picture>
    </div>
  );
}
