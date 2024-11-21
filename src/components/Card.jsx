function Card(props) {
    return (
      <div
        style={{
          backgroundColor: props.bgcolor,
          color: props.textColor,
        }}
        className="px-10 py-5 border rounded-md text-center flex-grow"
      >
        <h1 className="text-2xl font-semibold">{props.title}</h1>
        <p className="text-lg">{props.subtitle}</p>
      </div>
    );
  }
  
  export default Card;  