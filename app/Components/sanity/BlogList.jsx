import Image from "next/image";
import urlFor from "../../../utils/sanity/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import styles from "./BlogList.module.css";
function BlogList({ posts }) {
  console.log(posts);
  return (
    <>
      <div className={styles.grid}>
        {posts.map((post) => (
          <ClientSideRoute
            key={post._id}
            route={`/Posts/posts/${post.slug.current}`}
          >
            <div key={post._id} className={styles.card}>
              <div>
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  className={styles.image}
                  width={700}
                  height={700}
                />

                <div className={styles.info}>
                  <p className={styles.title}>{post.title}</p>
                  <div className={styles.created}>
                    Created:
                    {new Date(post._createdAt).toLocaleDateString("et-EE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
                {post.categories.length > 0 && (
                  <div className={styles.categories}>
                    <span>categories:</span>
                    {post.categories.map((category) => (
                      <div key={category._id}>
                        <p>* {category.title}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className={styles.author}>
                  <div>
                    <p>Author: {post.author.name}</p>
                  </div>
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    className={styles.authorImg}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </>
  );
}

export default BlogList;
