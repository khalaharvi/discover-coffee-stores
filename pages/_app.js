import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Component {...pageProps} />
    <Footer></Footer>
    </div>
    
  )
}

function Footer() {
  return (<footer><p>2022 Krishna</p></footer>)
}

export default MyApp
