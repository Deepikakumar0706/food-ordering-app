import { ImageComponent } from "./bannerlist";
import ImagesJSONData from "../../assets/data/data.json";

const imgData = ImagesJSONData.data.cards[0].card.card.imageGridCards.info;

const BannerComponent = () => {
  return (
    <div className="img-container">
      {imgData.map((banner) => {
        return <ImageComponent bannerContent={banner} />;
      })}
    </div>
  );
};
export default BannerComponent;
