import { ImageComponent } from "./bannerlist";
import ImagesJSONData from "../../assets/data/data.json";

const imgData = ImagesJSONData.data.cards[0].card.card.imageGridCards.info;

const BannerComponent = () => {
  return (
    <div>
      <div className="btn-container">
        <button
          onClick={() => {
            document.getElementById("container").scrollLeft -= 120 * 4;
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            document.getElementById("container").scrollLeft += 120 * 4;
          }}
        >
          &gt;
        </button>
      </div>
      <div className="img-container" id="container">
        {imgData.map((banner) => {
          return <ImageComponent key={banner.id} bannerContent={banner} />;
        })}
      </div>
    </div>
  );
};
export default BannerComponent;
