import {useState, useEffect} from 'react'


import {  Row, Col, Button } from 'react-bootstrap';
import PageLayout from '../components/PageLayout'
import AuthorIntro from 'components/AuthorIntro'

import {getAllBlogs, getPaginatedBlogs} from 'lib/api'
import FilteringMenu from 'components/FilteringMenu'
// import {useGetBlogs} from 'actions'
import { useGetBlogsPages } from 'actions/pagination';




export default function Home({blogs}) {
  // const blogs  = props.blogs
  const [filter, setFilter] = useState(
    {
    view:{list:1},
    date: {asc:0}
    }
  )

  
  const {pages, isLoadingMore,isReachingEnd, loadMore} = useGetBlogsPages({blogs, filter});

  // useEffect(()=>{
  //   async function fetchBlogs(){ 
  //     const blogs = await getAllBlogs();
  //     return blogs
  //   }

  //   fetchBlogs()
  // },[])


  // if(!blogsData){ return 'Loading'}
 
  
  return (
    <PageLayout>
        <AuthorIntro />
        <FilteringMenu 
          filter = {filter}
          onChange={(option, value)=>{
              setFilter({...filter, [option]:value})
          }}/>
        <hr/>
        {/* {JSON.stringify(blogs)}       */}
        <Row className="mb-5">
            {pages}
        </Row>


        <div style={{textAlign: 'center'}}>
          <Button
            onClick = {loadMore}
            disabled = {isReachingEnd || isLoadingMore}
            size="lg"
            variant="outline-secondary"
          >
            {isLoadingMore ? '...' : isReachingEnd? 'No more Blogs' : 'More Blogs'}
          </Button>
        </div>

      </PageLayout>
  )
}

// This function is called during the build time, and provides props to the page.
// it will create a static page
export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  return {
    props: {
      blogs
    }
  }
}