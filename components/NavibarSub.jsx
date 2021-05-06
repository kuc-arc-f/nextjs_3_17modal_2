import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
//
export default function Page(props){
//console.log(props.subData)
  return (
    <ul className="flex flex-wrap p-2 bg-gray-700">
    {props.subData.map((item, index) => {
      return (
      <li key={index} className="w-full sm:w-28">
        <Link href={item.action}>
          <a className="text-white hover:text-blue-400">{item.name}
          </a>
        </Link>        
      </li>      
      )
    })}
    </ul>
    )
}
