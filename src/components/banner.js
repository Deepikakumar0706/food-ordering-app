import { ImageComponent } from "./bannerlist";
import ImagesJSONData from "../../assets/data/data.json";

const imgData = ImagesJSONData.data.cards[0].card.card.imageGridCards.info;

const BannerComponent = () => {
  return (
    <div>
      <div className="flex justify-between my-3">
        <p className="font-bold text-2xl mx-10">What's on your mind?</p>
        <div className="btn-container">
          <button
            className="bg-indigo-900 w-10 h-10 text-white font-semibold text-2xl rounded-md mr-2"
            onClick={() => {
              document.getElementById("container").scrollLeft -= 130 * 4;
            }}
          >
            &lt;
          </button>
          <button
            className="bg-indigo-900 w-10 h-10 text-white font-semibold text-2xl rounded-md "
            onClick={() => {
              document.getElementById("container").scrollLeft += 130 * 4;
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="img-container flex mx-10 overflow-hidden" id="container">
        {imgData.map((banner) => {
          return <ImageComponent key={banner.id} bannerContent={banner} />;
        })}
      </div>
    </div>
  );
};
export default BannerComponent;
