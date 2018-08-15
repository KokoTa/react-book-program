import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

export class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showBackTop: false
    }
  }

  handleBack = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  handleScroll = () => {
    const top = document.documentElement.scrollTop;
    if (top < 400) return this.setState({ showBackTop: false });
    return this.setState({ showBackTop: true });
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='home-left-image' alt='banner图片' src='//upload.jianshu.io/admin_banners/web_images/4381/3cdf43257e95766122959099cd4b41b495e6adfc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        { this.state.showBackTop ? <BackTop onClick={this.handleBack}>Back</BackTop> : null }
      </HomeWrapper>
    )
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  
}

export default Home;
