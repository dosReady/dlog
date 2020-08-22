import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import { PostStore } from 'store';

const PostCategoryWrap = styled.div`
    margin-top: 20px;
    display:felx;
    button {
        border: 1px solid #F3F3F3;
        margin-right:1rem;
        :hover {
            background-color: #456582;
        }
    }
    button.selected {
        background-color:#f1d02e;
        border-left
    }
`
@inject('poststore')
@observer
class Category extends React.Component<{
    poststore?:PostStore
    loadFunc: () => Promise<void>
}, {}> {

    @autobind
    onClickCategory(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const nodes = e.currentTarget.parentElement?.children;
        if(nodes !== undefined) {
            for(let i=0; i< nodes.length; i++) {
                nodes[i].classList.remove("selected");
            }
            e.currentTarget.classList.add("selected");
            const category = (e.currentTarget.textContent || '').toLocaleLowerCase();
            this.props.poststore?.setCategory(category);
            this.props.loadFunc();
        }
    }

    componentDidMount():void {
        // default
        this.props.poststore?.setCategory("post");
    }

    render(): JSX.Element {
        return (
            <PostCategoryWrap>
                <button className="selected" onClick={this.onClickCategory}>Post</button>
                <button onClick={this.onClickCategory}>Code</button>
            </PostCategoryWrap>
        )
    }
}

export default Category;