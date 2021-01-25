import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import moment from 'moment'

import theme from '../../utils/theme'
import Text from '../text'
import Line from '../line'

type CommentType = {
    username: string,
    commentText: string,
    created_at: string
}

type CommentsType = {
    comments?: [CommentType]
}

const Container = styled(Text)`
    ${tw`rounded w-full md:w-1/2`}
    // background-color: ${theme.colors.secondary};
    // border: 1px solid ${theme.colors.main};
`;

const Username = styled.span`
    font-family: 'lato', sans-serif;
    font-weight: 800;
    ${tw`text-base uppercase`}
`
const Timestamp = styled.span`
    font-family: 'lato', sans-serif;
    ${tw`text-xs uppercase`}
`

const CommentHeader = styled.div`
    ${tw`leading-3`}
`

const CommentContainer = styled.div`
    ${tw`py-3`}
`

const Comment: React.FC<CommentType> = ({ username, commentText, created_at }) => {
    const date = moment(created_at).format('LL');
    const time = moment(created_at).format('LT');
    return (
        <CommentContainer>
            <CommentHeader>
                <Username>{username}</Username>
                <br />
                <Timestamp>{date} AT {time}</Timestamp>
            </CommentHeader>
            {commentText}
            <br />
            <Line />
        </CommentContainer>
    )
}

const Comments: React.FC<CommentsType> = ({ comments = [] }) => {
    if (comments.length === 0) return <></>;
    
    return (
        <Container>
            <h1>Comments</h1>
            {comments.map((comment, i) => {
                const { username, commentText, created_at } = comment;
                return <Comment
                    key={i}
                    username={username}
                    commentText={commentText}
                    created_at={created_at}
                />
            })}
        </Container>
    )
}

export default Comments