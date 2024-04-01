import {Header} from './Header'
import {Bestselers} from './bestselers';
import {LatestPosts} from './LatestPosts';
import {Comments} from './Comments';
import {Footer} from './Footer';

function Layout(){
  return (
    <>
      <Header/>
      <Bestselers />
      <LatestPosts/>
      <Comments/>
      <Footer/>
      
    </>
  )
}

export {Layout}