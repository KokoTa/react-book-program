import styled from 'styled-components';

/**
 * Home
 */
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .home-left-image {
    width: 100%;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

/**
 * Topic
 */
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #f7f7f7;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-left: 18px;
  margin-bottom: 15px;
  .topic-image {
    height: 100%;
    float: left;
    padding-right: 10px;
  }
`;

export const TopicMore = styled.div`
  text-decoration: none;
  display: inline-block;
  line-height: 32px;
  font-size: 14px;
  color: #787878;
  margin-left: 18px;
`;

/**
 * List
 */
export const ArticleWrapper = styled.div`
  margin-top: 20px;
`;

export const ArticleItem = styled.div`
  padding: 15px 2px 20px 0;
  border-top: 1px solid #f0f0f0;
  position: relative;
`;

export const ArticleLeft = styled.div`
  box-sizing: border-box;
  padding-right: 140px;
  .title {
    font-size: 18px;
    color: #333;
    font-weight: 700;
    margin-bottom: 5px;
    line-height: 1.5;
  }
  .content {
    font-size: 13px;
    color: #999;
    margin-bottom: 5px;
    line-height: 1.5;
  }
`;

export const ArticleRight = styled.div`
  width: 120px;
  height: 80px;
  position: absolute;
  top: 50%;
  margin-top: -40px;
  right: 0;
  .img {
    width: 100%;
    height: 100%;
  }
`;

/**
 * Recommend
 */
export const RecommendWrapper = styled.div`
  margin: 26px 0 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: 100% 100%;
  margin-bottom: 6px;
`;

/**
 * Writer
 */
export const WriterWrapper = styled.div`
  width: 280px;
`;

export const WriterItem = styled.div`
  overflow: hidden;
  margin-top: 15px;
  .img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
    float: left;
  }
  .name {
    font-size: 14px;
    color: #2f2f2f;
    line-height: 2;
  }
  .info {
    font-size: 12px;
    color: #969696;
  }
  .watch {
    float: right;
    font-size: 13px;
    color: #42c02e;
  }
`;

/**
 * LoadMore
 */
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

/**
 * BackTop
 */
export const BackTop = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1px solid #333;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #333;
  }
`;