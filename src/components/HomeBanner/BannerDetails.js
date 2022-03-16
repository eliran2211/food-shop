import classes from "./BannerDetails.module.css";

function BannerDetails(props) {
  const { title, description, style } = props;
  return (
    <div className={classes["details"]} style={style}>
      <p>{description}</p>
      <h1>{title}</h1>
      <a href="/">Read More</a>
    </div>
  );
}

export default BannerDetails;
