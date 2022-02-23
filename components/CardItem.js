import { Card} from 'react-bootstrap'
import Link from 'next/link'
import {urlFor} from 'lib/api'

const CardItem = (props)=>{



    const {title, subtitle, date, image, author, slug, link} = props
    console.log("--------->",slug)
    console.log("link",link)

    return(
        
        <Card className={`fj-card`}>
            {console.log(image)}
            <div className="card-body-wrapper">
                    <Card.Header
                        className="d-flex flex-row">
                        <img
                        src= {author? author.avatar: 'https://via.placeholder.com/250'}
                        // src= {image}
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                        alt="avatar" />
                        <div>
                        <Card.Title className="font-weight-bold mb-1">{author? author.name: "no author"}</Card.Title>
                        <Card.Text className="card-date">{date}</Card.Text>
                        </div>
                    </Card.Header>
                
                
                <div className="view overlay">
                    <Card.Img
                        src= 
                        {
                            urlFor(image)
                            .height(500)
                            // .fit('scale')
                            // .crop('center')
                            .url()
                        }
                        alt="Card image cap"
                    />
                </div>
                <Card.Body>
                    <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                </Card.Body>
            </div>
            
            {
                
                link &&
                <Link {...link}  >
                    <a  className="card-button">
                        Read More
                    </a>
                </Link>
                
            }

      </Card>

    )
}

export default CardItem