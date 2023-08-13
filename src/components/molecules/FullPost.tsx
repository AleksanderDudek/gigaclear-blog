import React from "react";
import { PostData, dateFormat } from "src/api/mockedApi";
import { format } from "date-fns";
import Image from "next/image";
import styles from "./FullPost.module.sass";

interface FullPostProps {
  post?: PostData;
}

const FullPost: React.FC<FullPostProps> = ({ post }) => {
  if (!post) return <>Error</>;
  return (
    <article className={styles.postWrapper}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <p>{post.excerpt}</p>

      <Image
        src={post.imageUrl}
        alt={post.title}
        className={styles.postImage}
        width={50}
        height={50}
      />

      <div>
        <span>{format(new Date(post.date), dateFormat)}</span>
      </div>
      <p className={styles.postContent}>{post.description}</p>
    </article>
  );
};

export default FullPost;
