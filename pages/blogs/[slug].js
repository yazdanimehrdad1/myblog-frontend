import PageLayout from 'components/PageLayout';
import { getBlogBySlug , getPaginatedBlogs, getAllBlogs } from 'lib/api';
import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap'
import BlogHeader from 'components/BlogHeader'
import BlogContent from 'components/BlockContent'
import { urlFor } from 'lib/api';
import ErroPage from 'next/error'
 
const BlogDetail =({blog}) => {
    const router = useRouter();
    // const { query } = useRouter();
    if(!router.isFallback && !blog?.slug){
      return <ErroPage statusCode ="404"/>
    }

    if(router.isFallback ){
      return(   
        <PageLayout className="blog-detail-page">
          Loading...
        </PageLayout>   
      )
    }



    return (
        <PageLayout className="blog-detail-page">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>

              <BlogHeader 
                title = {blog.title}
                subtitle = {blog.subtitle}
                // coverImage = {blog.coverImage}
                coverImage={urlFor(blog.coverImage).height(600).url()}
                date = {blog.date}
                author = {blog.author}
              />
              <hr/>
              
              <BlogContent  content={blog.content} />
              


            </Col>
          </Row>
        </PageLayout>
    )
}



// export async function getServerSideProps({params}) {
//     const blog = await getBlogBySlug(params.slug);
//     return {
//       props: {blog}
//     }
//   }

export async function getStaticProps({params}){
    const blog = await getBlogBySlug(params.slug)
    return {
        props:{blog}
    }
}


export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    const paths = blogs?.map(b => ({params: {slug: b.slug}}));
    return {
      paths,
      fallback: true
    }
  }




// export async function getStaticPaths(){
//     const blogs = await getAllBlogs()

//     const paths = blogs.map(b=> {(
//             {
//                 params: {slug: b.slug}
//             }
//         )
//     })

//     return{
//         paths,
//         fallback:false
//     }
// }



export default BlogDetail