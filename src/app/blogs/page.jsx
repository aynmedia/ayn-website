/** @format */
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogbg from '@/../public/images/blogs.jpg';
import { stripHtml } from 'string-strip-html';

async function getPosts(page = 1) {
  try {
    const res = await fetch(
      `https://ayntechmedia.com/landing/wp-json/wp/v2/posts?_embed=true&per_page=9&page=${page}`
    );
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();

    // Get total pages from response headers (WordPress provides this information)
    const totalPages = res.headers.get('X-WP-TotalPages');

    return { posts, totalPages: parseInt(totalPages, 10) };
  } catch (error) {
    console.error(error);
    return { posts: [], totalPages: 1 };
  }
}

export default function BlogIndex() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const { posts, totalPages } = await getPosts(currentPage);
      setPosts(posts);
      setTotalPages(totalPages);
    }
    fetchData();
  }, [currentPage]);

  return (
    <div className='relative'>
      {/* Hero Section */}
      <div className='relative h-[80vh] w-full'>
        <Image
          src={blogbg}
          alt='Blog background'
          fill
          objectFit='cover'
          className='absolute z-0'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-white/70 to-transparent flex items-center justify-center'>
          <h1 className='text-white text-4xl font-bold drop-shadow-md'>
            Our Blog
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='max-w-7xl mx-auto px-4 pt-12 pb-8 my-12'>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => {
            const featuredImage =
              post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              '/default-image.jpg';
            const truncatedExcerpt =
              stripHtml(post.excerpt.rendered).result.slice(0, 100) + '...';

            return (
              <article
                key={post.id}
                className='border border-gray-100/50 rounded-lg overflow-hidden shadow-xs transition-shadow hover:shadow-2xl'>
                {/* Featured Image */}
                {featuredImage && (
                  <Image
                    width={400}
                    height={250}
                    src={featuredImage}
                    alt={post.title.rendered}
                    className='w-full h-[250px] object-cover'
                  />
                )}

                {/* Post Content */}
                <div className='p-6'>
                  <h2
                    className='text-xl font-bold mb-2'
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className='mb-4 text-gray-600'
                    dangerouslySetInnerHTML={{ __html: truncatedExcerpt }}
                  />
                  <div className='text-sm text-gray-500 mb-4'>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className='text-blue-600 hover:underline inline-flex items-center'>
                    Read more
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination Section */}
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-200 rounded-lg mr-4 disabled:opacity-50'>
            Previous
          </button>
          <span className='text-md'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-gray-200 rounded-lg ml-4 disabled:opacity-50'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-static';
