import { useState } from 'react';
import { create as ipfsHttpClient } from 'ipfs-http-client';


const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

function Home() {
  const[fileUrl, setFile] = useState('')
  async function onChange(e){
    const file = e.target.files[0]
    try{
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFile(url)
    } catch(error){
      console.log('Error Status:', error)
    }
  }
  return(
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
      <input className="my-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onChange={onChange} type="file" />
      {
        fileUrl && (
          <img className="rounded mt-4" src={fileUrl} width="350px" />
        )
      }
    </div>
    </div>
  )
}

export default Home;
