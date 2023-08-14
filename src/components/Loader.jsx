import loaderGif from "../assets/img/loader.gif";
export default function Loader() {
  return (
    <div className="flex w-full h-[90vh] items-center justify-center">
      <img className="h-20 w-20" src={loaderGif} alt="" />
    </div>
  );
}
