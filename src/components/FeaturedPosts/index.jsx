import { useParams } from "react-router-dom";
import PostCard from "../PostCard";

export default function FeaturedPosts() {
  const parameter = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameter.id);
  });

  return (
    <div>
      <h3>Você também pode gostar...</h3>
      <nav>
        <ul>
          {posts.map((post) =>
            post.id != parameter.id ? (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </nav>
    </div>
  );
}
