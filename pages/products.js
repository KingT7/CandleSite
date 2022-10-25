import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import sunset from '../pages/sunset.jpg';
import Head from 'next/head';
import smallgreen from '../pages/smallgreen.jpg';
import mother from '../pages/mother.jpg';
import spider from '../pages/spider.jpg';
import pumpkincandle from '../pages/pumpkincandle.jpg';
import tallgreen from '../pages/tallgreen.jpg';
import purplepumpkin from '../pages/purplepumpkin.jpg';
import tallpurplepumpkin from '../pages/tallpurplepumpkin.jpg';
import smallpurplelight from '../pages/smallpurplelight.jpg';


const Products = () => {
    return(
        <div className={styles.productsBg}>

      <Head>
        <title>Candle App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
      </Head>

        <nav class="navbar navbar-expand-sm navbar-light bg-dark">
      <Image src={sunset} alt='sunset photo' width='50px' height='50px'/>
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <Link href= '/'><a className='nav-link'>Home</a></Link>
      </li>
      <li class="nav-item">
       <Link href='../products'><a className="nav-link">Products</a></Link>
      </li>
      <li class="nav-item">
      <Link href='../contactus'><a className="nav-link">Contact Us</a></Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<div className={styles.products}>
<h1><u>Welcome to our products page</u></h1>

</div>

<Image src={smallgreen} className='photos' alt='small green pumpkin candle' width='300px' height='300px'/>
<Image src={mother} className='photos' alt='small green pumpkin candle' width='300px' height='300px'/> 
<Image src={spider} className='photos' alt='small green pumpkin candle' width='300px' height='300px'/> 
<Image src={pumpkincandle} className='photos' alt='small green pumpkin candle' width='300px' height='300px'/> 
<Image src={tallgreen} className='photos' alt='small green pumpkin candle' width='300px' height='300px'/> 
<Image src={tallpurplepumpkin} className='photos' alt='small green pumpkin candle' width='300px' height='300px'/> 
<Image src={purplepumpkin} className='photos' alt='small green pumpkin candle' width='300px' height='300px'/> 
<Image src={smallpurplelight} className='photos' alt='small green pumpkin candle' width='300px' height='300px'/> 




</div>
    );
 };

 export default Products;