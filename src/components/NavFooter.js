import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class NavFooter extends React.Component {
  render () {
    return (
      <div className="content-footer">
        <Link activeStyle={{color:'lightblue'}} onlyActiveOnIndex={true}  to="/"><span className="glyphicon glyphicon glyphicon-home"></span><br />Home</Link>
        <Link activeStyle={{color:'lightblue'}} to="/blog"><span className="glyphicon glyphicon-folder-open"></span><br />Blog</Link>
        <Link activeStyle={{color:'lightblue'}} to="/work"><span className="glyphicon glyphicon-tags"></span><br />Work</Link>
        <Link activeStyle={{color:'lightblue'}} to="/about"><span className="glyphicon glyphicon-user"></span><br />Me</Link>
      </div>
    )
  }
}

export default NavFooter;
