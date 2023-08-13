import React from "react";
import Link from "next/link";
import { PostData, dateFormat } from "src/api/mockedApi";
import { format } from "date-fns";
import styles from "./Post.module.sass";
import Image from "next/image";

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
        <Image
          src={imageUrl}
          alt={title}
          width={334}
          height={229}
          className={styles.postImage}
        />
        <h2 className={styles.postTitle}>{title}</h2>

        <div className={styles.tagList}>
          {tags?.map((tag: string) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
        {/* desktop version */}
        <div className={styles.postTagsContainer}>
          <span className={styles.postElementLabel}>
            {format(new Date(date), dateFormat)}
          </span>
        </div>
        <p className={styles.postTitle}>{excerpt}</p>
      </Link>
    </article>
  );
};

export default Post;
