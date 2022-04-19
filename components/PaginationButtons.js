import { useRouter } from 'next/router';
import { ChevronLeftIcon, CheveronRightIcon } from "@heroicons/react/solid";
import React from 'react';
import Link from 'next/link';

export default function PaginationButtons() {

    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;

  return (
    <div className='flex mx-w-lg justify-between text-blue-700 mb-10'>
        
        {
            startIndex >= 10 && (
                 <Link href={`/search?term=${ router.query.term }&start=${startIndex - 10}`}>
                    <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
                        <ChevronLeftIcon className='h-5 ' />
                        <p className=''> Previous </p>
                    </div>
                 </Link>
            )
        }

        <Link href={`/search?term=${ router.query.term }&start=${startIndex + 10}`}>
           <div className='flex flex-grow flex-col items-center cursor-pointer hover:underline'>
              <CheveronRightIcon  className="h-5 "/> 
           </div>
        </Link>


    </div>
  );
}
