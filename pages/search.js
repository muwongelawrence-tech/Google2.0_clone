import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';
import PaginationButtons from '../components/PaginationButtons';
import SearchResults from '../components/SearchResults';
import Response from '../Response';


function Search({ results }) {
     
    //console.log(results);

     const router = useRouter();
    //  const { term } = router.query;
    //  console.log(term);

  return (
    <div className="">
       <Head> 
         <title> { router.query.term } -Google Search </title>
         <link rel="icon" href="/favicon.ico" />
       </Head>

       {/* Header */}
       <Header />

       {/* Search Results */}

       <SearchResults results = { results } />

    
       
    </div>
  );
}

export default Search;

export async function getServerSideProps(context){ 

   const useDummyData = false;

   const startIndex = context.query.start || "0";

  const data = useDummyData ? Response :
  await fetch(`https://www.googleapis.com/customsearch/v1?key=${ process.env.Api_key }
  &cx=${ process.env.Context_key }&q=${ context.query.term }&start=${startIndex}`
  ).then(response => response.json());

  // After the SERVER has rendered.....
  //pass the results to the client.
  return {
    props:{
      results: data
    }
  }

}
