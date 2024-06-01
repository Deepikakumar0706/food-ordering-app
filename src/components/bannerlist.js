import BaseUrls from "./baseUrls";

export const ImageComponent = (props) => {
  const { imageId } = props.bannerContent;
  return (
    <img
      src={`${BaseUrls.banner_url}${imageId}`}
      width="150"
      height="150"
      alt="image"
    />
  );
};
