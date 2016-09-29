import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack();
  }
  render () {
    return (
      <div className="content-header">
        <a href="#" onClick={this.handleBack.bind(this)}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true">Back</span></a>
        <h3>Tyler@{this.props.title}</h3>
        <a href="#"><span className="glyphicon glyphicon-heart-empty"></span></a>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default NavHeader;
