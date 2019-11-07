import React, {Component} from 'react';
import './post-board.css';

const posts = [
    {
        postId: 0,
        postAuthor: "Sashka",
        postPictureUrl: 'https://static.1000.menu/img/content/28813/tort-s-jivymi-cvetami_1537834998_1_max.jpg',
        postName: 'The Tort',
        postCategory: 'Sweets',
        postDishLocation: "ConditerWorld",
        postIngridients: {
            eggs: {
                type: 'sht',
                count: 2
            },
            creativity: {
                type: 'unknown',
                count: 100 
            }
        },
        postDescription: "The cake is very tasty",
        likes: 0,
        comments: {
            commentAuthor: "Sashka",
            commentAvatar: null,
            commentBody: 'Pervyi Nah',
            date: "20/20/20",
            commentId: 0
        },
        postPublished: '88-66-66-666-66-77'
    },
    {
        postId: 1,
        postAuthor: "Lena",
        postPictureUrl: 'https://valio.ru/upload/resize_cache/iblock/0e0/700_466_26db272ece31ddb77cd18b8e0eea435da/0e0d94dc40b81a59f0600ace7559d1dc.jpg',
        postName: 'Panakota',
        postCategory: 'Coctails',
        postDishLocation: "Bar",
        postIngridients: {
            strawberry: {
                type: 'mg',
                count: 5
            },
            alcohol: {
                type: 'ml',
                count: 10 
            }
        },
        postDescription: "Drink and run",
        likes: 1,
        comments: null,
        postPublished: '11-111-11-1-1-111'
    },
    {
        postId: 2,
        postAuthor: "Rambo",
        postPictureUrl: 'https://storage.smilefood.ua/storage/3b/dd/3bdd09ca51014db4eb132eb23c705c9d.jpg',
        postName: 'Chuchi',
        postCategory: 'Rolls',
        postDishLocation: "Japan",
        postIngridients: {
            rise: {
                type: 'gr',
                count: 2
            },
            nori: {
                type: 'sht',
                count: 100
            }
        },
        postDescription: "The cake is very tasty",
        likes: 0,
        comments: {
            commentAuthor: "Sashka",
            commentAvatar: "https://nawoke.ru/img/menu/small/100003730.jpg",
            commentBody: 'Pervyi Nah',
            date: "20/20/20",
            commentId: 0
        },
        postPublished: '88-66-66-666-66-77'
    },
    
]


export default class PostBoard extends Component {

     ingredientMapper = (ingreds) => {
        const newIngredientsArray = Object.entries(ingreds).map(([key, value])=> {
            return (
                <span className='row d-flex mt-2'>
                    <span className = "col-8 text-left key-style">{key}</span>
                    <span className = "col-1 count-style">{value.count}</span>
                    <span className = "col-1 text-left type-style">{value.type}</span>
                </span>
            )
        })
        return newIngredientsArray
    } 

    postComposer = (posts) => {
        const newArr = posts.map((item, index)=> {
            return(
                <div className='d-flex flex-column post-box'>
                    <div className='row d-flex pl-5 pt-4'>
                        <img className="pic-sizing" src={item.postPictureUrl} alt={`dish number ${index}`}/>
                        <div className='col-8 d-flex flex-column'>
                            <div className = 'd-flex justify-content-center'>
                                <h1 className = 'header-style'>{item.postName}</h1>
                            </div>
                            <ol>
                                {this.ingredientMapper(item.postIngridients)}
                            </ol>
                        </div>
                    </div>
                    <div>
                        <p>{item.postDescription}</p>
                        <p>Created by {item.postAuthor}</p>
                    </div>
                </div>
            )
        })
        console.log(newArr)
        return newArr
    }

    render() {
        return(
            this.postComposer(posts)
        )
    }
}