const Title = () => {
  return (
    <section className="container">
      <h1 className="text-[35px] sm:text-[69px] font-bold text-gray-light font-changa-one /// max-w-[240px] sm:max-w-[600px] /// z-2 mt-[30px] mx-auto sm:mx-0 relative leading-none">
        Designer{" "}
        <span
          className="text-primary-light text-[120px] sm:text-[220px] font-extra-bold font-paytone /// absolute -z-1 end-[25%] top-[30%] translate-x-[-50%] translate-y-[-50%]"
          style={{ zIndex: -1 }}
        >
          &
        </span>{" "}
        Desenvolvedora
      </h1>
    </section>
  );
};

export default Title;
