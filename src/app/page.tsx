import notionAPI from "@/lib/notion";
import Item from "@/components/Item";

const HomePage = async () => {
  const posts = await notionAPI.getPosts();

  return (
    <div className="flex flex-col w-fyll">
      <p className="w-full">YUNSU LIM</p>
      <div className="mt-4 p-4 border rounded w-fit">
        <p className="border-b font-bold">POST TITLES</p>
        {posts.map(({ id, title }) => (
          <p key={id}>{title}</p>
        ))}
      </div>
      <Item />
    </div>
  );
};

export default HomePage;
