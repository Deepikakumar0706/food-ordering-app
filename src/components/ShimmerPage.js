const ShimmerPage = () => {
  const emptyDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div>
      <div className="main">
        <div className="rest-link-content">
          {emptyDetails.map((value) => {
            return (
              <div key={value} className="rest-container">
                <div className="image-cont">
                  <div className="img bg-grey"></div>
                </div>
                <h3></h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShimmerPage;
