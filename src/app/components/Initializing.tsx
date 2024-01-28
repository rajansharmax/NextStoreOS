import Image from "next/image";

const Initializing = () => {
  return (
    <div className="loading-product-editor">
      <div className="d-flex justify-content-center align-items-center">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
};

export default Initializing;
