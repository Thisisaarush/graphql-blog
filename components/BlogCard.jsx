import Image from "next/image";
import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

export const BlogCard = ({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) => {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <div className={styles.imgContainer}>
          <Image layout="fill" src={coverPhoto.url} alt="cover photo" />
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <Image
              width={35}
              height={35}
              src={author.avatar.url}
              alt={author.name}
            />
            <h3 className={styles.authorName}>{author.name}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
