/** @format */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Function to get all post slugs at build time
export async function getAllPostSlugs() {
  try {
    const res = await fetch(
      'https://ayntechmedia.com/landing/wp-json/wp/v2/posts?per_page=100'
    );
    const posts = await res.json();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return empty array if fetch fails
  }
}

// Function to get post data with ISR
async function getPostData(slug) {
  try {
    const res = await fetch(
      `https://ayntechmedia.com/landing/wp-json/wp/v2/posts?slug=${slug}&_embed=true`,
      {
        next: {
          revalidate: 60, // Revalidate every 60 seconds
        },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }

    const posts = await res.json();
    return posts[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Generate static params for initial build
export async function generateStaticParams() {
  const paths = await getAllPostSlugs();
  return paths;
}

// Default export for the page component
export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPostData(slug);

  // Loading state or error handling
  if (!post) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-2xl font-bold'>Post not found</h1>
          <Link
            href='/blog'
            className='text-blue-600 hover:underline mt-4 inline-block'>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <article className='container mx-auto px-4 py-32'>
      <div className='max-w-4xl mx-auto'>
        {featuredImage && (
          <div className='relative w-full h-[400px] mb-8'>
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className='object-cover rounded-lg'
              priority
            />
          </div>
        )}
        <h1
          className='text-4xl font-bold mb-4'
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div className='text-gray-600 mb-6'>
          Published on {new Date(post.date).toLocaleDateString()}
        </div>
        <div
          className='prose max-w-none'
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        <div className='mt-8'>
          <Link href='/blogs' className='text-blue-600 hover:underline'>
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}

// Keep the force-static configuration
export const dynamic = 'force-static';
