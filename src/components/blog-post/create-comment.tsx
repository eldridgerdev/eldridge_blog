import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { gql, useMutation } from '@apollo/client'

import theme from '../../utils/theme'
import Text from '../text'

const ADD_COMMENT = gql`
mutation AddComment ($username: String!, $text: String!, $post_id: ID!) {
    createComment(input: { data: {
        username: $username,
        commentText: $text,
        blog: $post_id
    }}) {
        comment {
            username,
            commentText,
            blog {
                id
            }
        }
    }
}
`


// @TODO - copied from text-section, turn into component
const Container = styled(Text)`
    ${tw`w-full md:w-1/2 pt-10`}
`

const AnimationContainer = styled.div`
    ${tw`transition-all`}
`

const Form = styled.form`
    ${tw`flex flex-col mb-4`}
`

const InputContainer = styled.div`
    ${tw`flex flex-col mb-4`}
`

const BaseInput = css`
    border-radius: 3px;
    border-color: ${theme.colors.main};
    color: ${theme.colors.main};
    ${tw`border py-2 px-3 text-black placeholder-gray-700 focus:ring-4`}
    --tw-ring-color: ${theme.colors.main};
    outline: none;
`

const InputField = styled.input`${BaseInput}`;
const TextAreaField = styled.textarea`
    ${BaseInput}
    height: 10em;
`;

const SubmitMessage = styled.div`
    ${BaseInput}
    ${tw`transition-all`}
`;

const Label = styled.label`
    ${tw`mb-2 uppercase font-bold text-lg text-gray-700`}
`

const Submit = styled.button`
    background-color: ${theme.colors.main};
    border-color: ${theme.colors.main};
    color: white;
    &:focus {
        outline: none;
    }
    // --tw-ring-color: ${theme.colors.main}
    ${tw`font-bold py-3 px-5 border rounded shadow w-1/2 self-center`}
    ${tw`focus:ring-2 ring-opacity-50 ring-black`}
`

const CreateComment: React.FC<{post_id: string}> = ({ post_id }) => {
    const [addComment, { loading, error }] = useMutation(ADD_COMMENT);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [hidden, setHidden] = useState(false);

    if (error) {
        console.error(error);
    }

    // alert(post_id);

    const onSubmit = (e: Event) => {
        // console.log()
        e.preventDefault();
        // alert(`${process.env.REACT_APP_BACKEND_URL}`); //'Your comment has been submitted');
        addComment({
            variables: {
                username,
                text: comment,
                post_id
            }
        });

        setHidden(true);
    }

    return (
        <Container>
            {!hidden && !loading && (
                <AnimationContainer>
                    <h1>Leave A Comment</h1> 
                    <Form action='/' onSubmit={onSubmit} autoComplete="off">
                        <InputContainer>
                            <Label htmlFor='name'>Name</Label>
                            <InputField
                                name='name'
                                id='name'
                                placeholder='Your Name'
                                type='text'
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <Label htmlFor='comment'>Comment</Label>
                            <TextAreaField
                                name='comment'
                                id='comment'
                                placeholder='Your Comment'
                                onChange={e => setComment(e.target.value)}
                                required
                            />
                        </InputContainer>
                        <Submit type='submit'>Submit</Submit>
                    </Form>
                </AnimationContainer>
            )}

            {hidden && !loading && (
                <SubmitMessage>
                    Thanks for submitting your comment! It will appear once it is approved.
                </SubmitMessage>
            )}
        </Container>
    )
}

export default CreateComment