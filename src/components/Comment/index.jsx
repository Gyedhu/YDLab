import React from 'react';
import { CommentContainer } from './style';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
});

const mapStateToDispatch = diapatch => ({
});

const Comment = ({ message }) => {
    return (
        <CommentContainer>{message}</CommentContainer>
    );
}

export default connect(mapStateToProps, mapStateToDispatch)(Comment);
