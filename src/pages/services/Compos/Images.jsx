const Images = ({ style, src }) => {
  return (
    <div className={` w-[5rem] md:w-[15rem]`}>
      <img className={`w-full ${style}`} src={src} alt={src} />
    </div>
  );
};

export default Images;
