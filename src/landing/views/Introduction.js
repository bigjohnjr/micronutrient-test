import React, { Component } from 'react';
import IntroImg from '../../images/intro-img.jpg';

class Introduction extends Component {
  render() {
    return (
      <div className="intro-box cf">
        <img className="intro-image left" src={IntroImg} alt=""/>
        <div className="intro-text right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ante eu elit faucibus scelerisque vel eget arcu.
          Cras lobortis, nisl in aliquet commodo, quam mi tincidunt mi, ac ultricies dui urna suscipit ex. Mauris lobortis urna vel augue volutpat, et congue massa condimentum.<br /><br />
          Nam sed neque quis velit auctor scelerisque euismod vitae massa. Nulla facilisi. Nam dictum turpis enim. Nunc at consequat elit. In eu maximus leo. In sit amet ornare libero. Etiam rutrum tristique placerat. Ut ullamcorper, massa vitae facilisis suscipit, tortor felis interdum tellus, vel tristique velit sapien eget risus. Aliquam erat volutpat. In cursus ligula eu justo pulvinar tincidunt. Nulla sit amet eleifend risus. Phasellus lacinia facilisis arcu, sed porttitor magna sollicitudin at. Ut urna sem, posuere id magna in, congue imperdiet ex. Aliquam est tortor, pharetra quis sem ac, sollicitudin pellentesque nisl. Sed quis hendrerit diam.
        </div>
      </div>
    )
  }
}

export default Introduction;
