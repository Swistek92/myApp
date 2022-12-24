import { previewData } from "next/headers";

import { groq } from "next-sanity";
import { client } from "../../utils/sanity/sanity.client";
import PreviewSuspense from "../Components/sanity/PreviewSuspense";
import PreviewBlogList from "../Components/sanity/PreviewBlogList";
import BlogList from "../Components/sanity/BlogList";
const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const HomePage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p>loading prev data</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
    // return <p>previe mode</p>;
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default HomePage;
