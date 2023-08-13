import React from "react";
import { PostData } from "src/api/mockedApi";
import styles from "./PostGrid.module.sass";

import Post from "../molecules/Post";

interface PostGridProps {
  posts: PostData[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  return (
    <div className={styles.postGrid}>
      {posts.map((post) => (
        <Post
          key={post.slug}
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          imageUrl={post.imageUrl}
          tags={post.tags}
          date={post.date}
          description={""}
        />
      ))}
    </div>
  );
};

export default PostGrid;
