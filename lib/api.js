import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';


const blogFields = `
  title,
  subtitle,
  date,
  'author': author->{name, 'avatar' : avatar.asset->url},
  'slug': slug.current,
  // 'coverImage': coverImage.asset->url,
  coverImage,
`

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source);
}


// export async function getAllBlogs({offset,date} = {offset: 0, date:'desc'}){
export async function getAllBlogs({offset = 0, date = 'desc'} = {offset: 0, date: 'desc'}) {

   const results =  await client
        .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset}+3]`);
        return results
}

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{... , "asset": asset->}
    }`, {slug})
    .then(res => res?.[0])

  return result;

}