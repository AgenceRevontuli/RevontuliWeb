import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "./featured-media";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  

  return (
    <div className="section">
      <Header>
        <h1>Blog 🦊<br/> de l’entrepreneur digital</h1>
        <p>Bienvenue sur le blog de Revontuli. Un concentré d’actus et de tips pour votre stratégie de marketing et de création de projet digital. </p>
      </Header>
      <Articles>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id];
          const categorie = state.source.category[post.categories];
          console.log(categorie);
          return (
            <BoxArticle>
              <Link key={item.id} link={post.link}>
                  <FeaturedMedia id={post.featured_media} />
                  <PostInfo>
                    <Link colorLink={categorie.id === 4 ? '#fff' : null} link={categorie.link} ><p className="item" >#{categorie.name}</p></Link>
                    <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </PostInfo>
              </Link>
            </BoxArticle>
          )
        })}
      </Articles>
    </div>
  )
}

export default connect(List);

const Header = styled.div`
  max-width: 800px; 
  margin: 0 auto;
  text-align: center;
  padding: 80px 10% 0px 10%;
  & > h1 {
    font-size: 5em;
  }

`

const BoxArticle = styled.div`
  position: relative; 
  width: 33%;
  text-align: center;
  margin-right: 40px;
  & > a > div > img {
    width: 100%;
    border-radius: 30px;
  }
`

const Title = styled.h2`
`;

const PostInfo = styled.div`

  position: absolute; 
  bottom: 0;
  left: 0;
  margin: 10px;
  background: rgba( 255, 255, 255, 0.80 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10.0px );
  -webkit-backdrop-filter: blur( 10.0px );
  border-radius: 20px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: 20px;
  text-align: left;
  .item {
    font-size: 0.8em;
    display: inline-block;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0px;
  }
  & > a {
    color: ${props => props.colorLink || "#FDA05A"}!important;
  }
  & > h2 {
    font-size: 1.5em;
    margin-top: 0px;
  }
`

const Articles = styled.div`
  padding: 80px 10%;
  display: flex; 
  justify-content: space-between;
  align-items: center;
`