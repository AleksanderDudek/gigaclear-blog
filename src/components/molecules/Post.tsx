import React from "react";
import Link from "next/link";
import { PostData, dateFormat } from "src/api/mockedApi";
import { format } from "date-fns";
import styles from "./Post.module.sass";

const Post: React.FC<PostData> = ({
  slug,
  title,
  excerpt,
  imageUrl,
  tags,
  date,
}) => {
  return (
    <article className={styles.postWrapper}>
      <Link href={`/posts/${slug}`}>
        <img
          src={imageUrl}
          alt={title}
          width={334}
          height={229}
          className={styles.postImage}
        />
        <h2 className={styles.postElementTitle}>{title}</h2>

        <div className={styles.tagList}>
          {tags?.map((tag: string) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
        <div className={styles.postElementLabelsContainer}>
          <span className={styles.postElementLabel}>
            {format(new Date(date), dateFormat)}
          </span>
        </div>
        <p>{excerpt}</p>
      </Link>
    </article>
  );
};

export default Post;
