import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from 'components/HighlightCode'
import {urlFor} from 'lib/api'

export default function BlogContent({content}){


    const serializers = {
        types: {
          code: ({node: {language, code, filename}}) => {
            return (
            //   <pre data-language={language}>
            //     <code>{code}</code>
            //     <p>{filename}</p>
            //   </pre>
                <HighlightCode language={language}>
                    {code}
                    <div className="code-filename">{filename}</div>
                </HighlightCode>
            )
          },
          image: ({node:{asset, alt, position}})=>{
            return (
                <div className="blog-image">

                    <img src={urlFor(asset.url).height(300).fit('max')}></img>
                    <div className="image-alt">{alt}</div>

                </div>
            )  
          }
        }
    }

    return(
        <BlockContent
            imageOptions={{w:320, h:240, fit:'max'}} 
            serializers={serializers}
            blocks = {content}
        /> 
    )
}