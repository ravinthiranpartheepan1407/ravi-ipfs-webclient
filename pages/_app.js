import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>

      <h1 className="text-center text-xl"> Ipfs-Web-Client </h1>
      <h3 className="text-center text-xl"> Developed By Ravinthiran </h3>

          <Component {...pageProps} />

    </div>

  )
}

export default MyApp
