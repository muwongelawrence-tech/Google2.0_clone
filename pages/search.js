import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Response from '../Response';


function Search({ results }) {
     console.log(results);
  return (
    <div className="">
       <Head> 
         <title>Search Results</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>

       {/* Header */}
       <Header />

       {/* Search Results */}
       
    </div>
  );
}

export default Search;

export async function getServerSideProps(context){ 
  
   const useDummyData = true;
   const startIndex = context.query.start || "0";

  const data = useDummyData ? Response :
  await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.Api_key}
  &cx=${process.env.Context_key}&q=${context.query.term}&start=${startIndex}`
  ).then(response => response.json());

  // After the SERVER has rendered.....
  //pass the results to the client.
  return {
    props:{
      results: data
    }
  }

}
