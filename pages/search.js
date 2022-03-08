import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';


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
  
  const useDummyData = false;

  const data = 
  await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.Api_key}&cx=${process.env.Context_key}&q=${context.query.term}`
  ).then(response => response.json());

  // After the SERVER has rendered.....
  //pass the results to the client.
  return {
    props:{
      results: data
    }
  }

}
