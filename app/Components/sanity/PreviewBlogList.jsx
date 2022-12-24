"use client";

import { usePreview } from "../../../utils/sanity/sanity.preview";
import BlogList from "./BlogList";

export default function PreviewBlogList({ query }) {
  const posts = usePreview(null, query);

  return <BlogList posts={posts} />;
}
