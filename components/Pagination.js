import React from 'react';
import { useRouter } from 'next/router';
import { ChevronLeftIcon, CheveronRightIcon } from "@heroicons/react/solid";
import Link from 'next/link';

function Pagination() {

    const router = useRouter();
    const startIndex = Number(router.query.start) || "0";


  return (
    <div className=''>
        Pagination
    </div>
  );
}

export default Pagination;