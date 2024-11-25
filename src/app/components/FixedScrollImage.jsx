/** @format */

// components/FixedScrollImage.js
'use client';

import Image from 'next/image';
import { useRef } from 'react';

export const FixedScrollImage = ({
  src,
  alt = 'Background Image',
  children,
  priority = true,
  quality = 90,
  containerClassName = '',
  contentClassName = '',
  imageClassName = '',
}) => {
  const imageRef = useRef(null);

  return (
    <main className={`relative ${containerClassName}`}>
      {/* Fixed image container - now with better centering */}
      <div className='fixed inset-0 h-screen w-full overflow-hidden bg-black'>
        <div className='relative h-full w-full'>
          <Image
            ref={imageRef}
            src={src}
            alt={alt}
            quality={quality}
            priority={priority}
            fill
            sizes='100vw'
            className={`object-cover object-center ${imageClassName}`}
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx4dHx8dHx8dHx8dHx8fHx8dHx8fHx8fHx8dHx8fHx8fHx8fHx8fHx8fHx//wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
          />
        </div>
      </div>

      {/* Scrollable content */}
      <div className='relative z-10'>
        <div className='h-screen w-full' aria-hidden='true' /> {/* Spacer */}
        <div className='relative bg-white'>
          <div className={`mx-auto max-w-4xl p-8 ${contentClassName}`}>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};
// Example usage in your page component
// export const ExamplePage = () => {
//   return (
//     <FixedScrollImage
//       src='/your-image.jpg'
//       alt='Mountain landscape'
//       // Optional props
//       quality={95}
//       priority={true}
//       containerClassName='bg-gray-100'
//       contentClassName='bg-white/90'
//       imageClassName='object-center'>
//       <h1 className='mb-6 text-4xl font-bold'>Your Content Here</h1>
//       <p className='mb-4'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </p>
//       {/* Add more content */}
//       {Array(10)
//         .fill()
//         .map((_, i) => (
//           <p key={i} className='mb-4'>
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//             nisi ut aliquip ex ea commodo consequat.
//           </p>
//         ))}
//     </FixedScrollImage>
//   );
// };
