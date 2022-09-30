import React from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {RightOutlined} from '@ant-design/icons';
import './Home.css'
export default function Home(){
    return (
        <>
        <div class="container">
        <div class="name">
        TEA ABUSELIDZE
      </div>

      <div class="description">
        <p class="typing-demo">
        Software Engineer and Front End Developer
        </p>
      </div>

      <div class="container1">
      <CustomLink to="/work" style={{ textDecoration: 'none', color: '#FFFFFA'}}>
        <div class="projects">
        <div>
        <RightOutlined style={{ marginTop: '1px', color: '#FFFFFA'}}/>
        </div>
        <div>
          see my projects
        </div>
        </div>
        </CustomLink>
        

        <CustomLink to="/about" style={{ textDecoration: 'none', color: '#FFFFFA'}}>
        <div class="learn">
          <div>
          <RightOutlined style={{ marginTop: '1px', color: '#FFFFFA'}}/>
          </div>
        <div>
          learn more
        </div>
        </div>
        </CustomLink>
      </div>
      </div>

      </>
    )
    
}


function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  
      return(
          <div className={isActive ? "active" : ""}>
              <Link to={to} {...props}>
                  {children}
              </Link>
          </div>
      )
  }