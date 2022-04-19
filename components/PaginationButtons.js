import { useRouter } from 'next/router';
import { ChevronLeftIcon, CheveronRightIcon } from "@heroicons/react/solid";
import React from 'react';
import Link from 'next/link';

function PaginationButtons() {

    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;

  return (
    <div className=''>
        
        {
            startIndex >= 10 && (
                 <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div>
                        <ChevronLeftIcon className='h-5' />
                        <p className=''> Previous </p>
                    </div>
                 </Link>
            )
        }

        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
           <div>
              <CheveronRightIcon  className="h-5 "/> 
           </div>
        </Link>


    </div>
  );
}

export default PaginationButtons;