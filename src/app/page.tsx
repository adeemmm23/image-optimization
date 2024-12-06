import Navigation from "./_components/Navigation";

export default function Home() {
  return (
    <>
      <div className="flex items-start gap-2 flex-col">
        <h1 className="text-2xl font-bold">Bienvenue sur Pixels Inspection</h1>
        <p className="text-md">
          Pixels Inspection est une application qui permet de visualiser les
          différentes propriétés des images.
        </p>
        {/* <p className="text-md">
          Nous tous utilisé des images sur nos sites web, mais savons-nous
          vraiment comment elles fonctionnent ?
        </p> */}
      </div>
      <Navigation />
      <p className="text-xs text-zinc-600">Made by Multiversers_ISITCom</p>
    </>
  );
}
