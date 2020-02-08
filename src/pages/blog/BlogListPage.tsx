import React from 'react';
import 'resources/css/index.css';
import DefaultTemplate from 'components/templates/DefaultTemplate';
import PostList from 'components/PostList';

class BlogListPage extends React.Component {

   render = ():JSX.Element => {
       return (
           <DefaultTemplate>
                <PostList/>
           </DefaultTemplate>
       )
   }
}

export default BlogListPage;