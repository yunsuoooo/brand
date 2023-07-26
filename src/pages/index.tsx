import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { getPosts } from "./api/getPosts";
import { TPost } from "@/types";

const Home: NextPage<{ posts: TPost[] }> = ({ posts }: { posts: TPost[] }) => {
  return (
    <>
      <div className="flex w-fyll">
        <div className="rounded-lg overflow-hidden object-cover">
          <Image
            src="/images/main_image.png"
            alt="me"
            width="120"
            height="80"
            className="rounded-full overflow-hidden"
          />
        </div>
        <p className="w-full">YUNSU LIM</p>
      </div>
      <div className="mt-4 p-4 border rounded w-fit">
        <p className="border-b font-bold">POST TITLES</p>
        {posts.map(({ id, title }) => (
          <p key={id}>{title}</p>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60,
  };
};

export default Home;
