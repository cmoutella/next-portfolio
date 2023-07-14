import LinkButton from "@/components/LinkButton";

const Cta = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:p-[60px]">
      <p className="mb-3">Tem uma idéia pra tirar do papel?</p>
      <LinkButton
        label="Entre em contato"
        btnClasses="bg-terciary-medium text-white"
        linkUrl="#"
        size="large"
      />
    </div>
  );
};

export default Cta;
