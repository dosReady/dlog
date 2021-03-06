import { IPostModel } from 'api/model/PostModels';
import PostService from 'api/service/PostService';
import CommonConatiner from 'components/CommonContainer';
import PostView from 'components/PostView';
import { StringUtlz } from 'lib/Utlz';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject("postservice")
@observer
class PostViewPage extends React.Component<RouteComponentProps<{postkey:string}> & {
    postservice?:PostService
}, {post:IPostModel}> {

    readonly state = {
        post: {} as IPostModel
    }

    async initialize():Promise<void> {
        const postkey:string = this.props.match.params.postkey;
        if(!StringUtlz.isEmpty(postkey)) {
            const [postdata, ] = await this.props.postservice!.getPost(postkey)
            this.setState({
                post: postdata
            })
        }
    }

    componentDidMount():void {
        this.initialize()
    }

    render():JSX.Element {
        const info:IPostModel = this.state.post;
        let PostViewJSX = (<></>)
        if(!StringUtlz.isEmpty(info.PostKey)) {
            PostViewJSX = ( <PostView info={info}/>)
        }

        return (
            <CommonConatiner title={this.state.post.PostTitle}>
                {PostViewJSX}
            </CommonConatiner>
        )
    }
}

export default withRouter(PostViewPage);