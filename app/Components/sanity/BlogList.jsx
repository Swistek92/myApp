import Image from "next/image";
import urlFor from "../../../utils/sanity/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import styles from "./BlogList.module.css";
function BlogList({ posts }) {
  console.log(posts.length);
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
                  // className='object-cover object-left lg:object-center rounded-md'
                  width={700}
                  height={700}
                />

                <div>
                  <div className={styles.info}>
                    <p className={styles.title}>Title: {post.title}</p>
                    <p className={styles.created}>
                      Created:
                      {new Date(post._createdAt).toLocaleDateString("et-EE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className={styles.arrow}>
                      <span>Read more</span>
                      <ArrowUpRightIcon />
                    </p>
                  </div>

                  <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                    {post.categories.map((category) => (
                      <div
                        key={category._id}
                        className='bg-[#202020] text-center text-white px-3 py-1 rounded-full text-sm font-medium'
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
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
