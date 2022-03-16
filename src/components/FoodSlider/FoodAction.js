function FoodAction(props) {
  const { svg: Svg } = props;

  return (
    <button onClick={props.onClick} className={props.itemClasses}>
      <Svg className={props.svgClasses} />
    </button>
  );
}

export default FoodAction;
