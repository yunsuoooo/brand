import Image from "next/image";

const Home = () => {
  return (
    <>
      <h1>This is ME</h1>
      <div className="w-32 rounded-lg overflow-hidden">
        <Image
          src="/images/main_image.png"
          alt="me"
          width="1080"
          height="1080"
        />
      </div>
    </>
  );
};

export default Home;
