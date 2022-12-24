import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../utils/sanity/urlFor";
import styles from "./RichTextComponent.module.css";
const customImg = ({ value }) => {
  return (
    <div className='relative w-full h-96 m-10 mx-auto'>
      <Image
        className={styles.img}
        src={urlFor(value).url()}
        alt='blog post image'
        width={700}
        height={700}
      />
    </div>
  );
};

export const RichTextComponents = {
  types: {
    image: customImg,
  },
  list: {
    bullet: ({ children }) => {
      return <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>;
    },
    number: ({ children }) => {
      return <ol className='mt-lg list-decimal'>{children}</ol>;
    },
  },

  block: {
    h1: ({ children }) => <h1 className='text-5xl'>{children}</h1>,
    h2: ({ children }) => (
      <h2 className='text-5xl py-10 font-bold'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-5xl py-10 font-bold'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-5xl py-10 font-bold'>{children}</h4>
    ),
    // p: ({ children }) => <p className='text-green-400'>{children}</p>,
  },
  blockquote: ({ children }) => {
    return (
      <blockquote className='border-yellow-500 bord-l-4 pl-5 py-5 my-5'>
        {children}
      </blockquote>
    );
  },

  marks: {
    em: ({ children }) => (
      <em className='text-red-400 font-semibold'>{children}</em>
    ),

    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className='underline decoration-gray-800 hover:decoration-black'
        >
          {children}
        </Link>
      );
    },
  },
};
