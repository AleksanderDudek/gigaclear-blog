import React from "react";
import Link from "next/link";
import { PostData, dateFormat } from "src/api/mockedApi";
import { format } from "date-fns";
import Image from "next/image";
import styles from "./FullPost.module.sass";

const FullPost: React.FC<PostData> = ({
  title,
  excerpt,
  imageUrl,
  date,
  description,
}) => {
  return (
    <article className={styles.postWrapper}>
      <h2 className={styles.postTitle}>{title}</h2>
      <p>{excerpt}</p>

      <Image
        src={imageUrl}
        alt={title}
        className={styles.postImage}
        width={50}
        height={50}
      />

      <div>
        <span>{format(new Date(date), dateFormat)}</span>
      </div>
      <p className={styles.postContent}>{description}</p>
    </article>
  );
};

export default FullPost;
