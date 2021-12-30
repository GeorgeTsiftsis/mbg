function EpikentroChild({ title, description, letter, image }) {
  return (
    <div className=" flex flex-col  drop-shadow-2xl md:w-80 justify-center items-center  font-manrope  m-4  ">
      <img className=" w-full" alt="Biomarkers" src={image} />
      <div className="flex flex-col bg-myepikentro hover:bg-blue-400  justify-center items-center ">
        <div className="self-center  ">
          <div className="relative">
            <img src="./hexagon-128.png" />
            <h1
              style={{
                position: "absolute",
                right: "35px",
                top: "42px",
                fontSize: "95px",
              }}
              className="text-4xl text-black text-center"
            >
              {letter}
            </h1>
          </div>
        </div>
        <h1 className="  text-center text-3xl  pb-2 text-white">{title}</h1>

        <div>
          <div className="flex  flex-col justify-items justify-center ">
            <p
              style={{
                textAlign: "center",
                // wordSpacing: "-2px",
                textJustify: "auto",
                // text-align: justify;
                // textAlign: "center",
                // textJustify: "inter-word",
                // whiteSpace: "pre-line",
                // whiteSpace: "pre-line",

                // textAlignLast: "left",
              }}
              className=" place-self-start p-4 text-base text-white h-40"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EpikentroChild;
