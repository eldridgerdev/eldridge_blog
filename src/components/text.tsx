import styled from 'styled-components';
import tw from 'twin.macro';

const Text = styled.div`
    color: #000000;
    font-family: 'raleway', serif;
    font-weight: 400;

    ${tw`leading-tight text-base md:text-xl`}

    & > h1 {
        // font-family: 'alegreya', serif;
        font-weight: bold;
        // text-transform: capitalize;
        ${tw`mb-2 leading-tight text-3xl md:text-4xl`}
    }

    & > h2 {
        ${tw`leading-loose text-3xl md:text-4xl`}
    }

    & > h3 {
        ${tw`leading-loose text-2xl md:text-3xl`}
    }

    & > h4 {
        ${tw`leading-loose text-xl md:text-2xl`}
    }

    & > h5 {
        ${tw`leading-loose text-xl md:text-xl`}
    }

    & .image-style-align-center {
        margin: 0 auto;
        ${tw`sm:w-full md:w-full`}
    }

    & .image-style-align-left {
        float: left;
        margin-right: 20px;
    }

    & .image-style-align-right {
        float: right;
        margin-left: 20px;
    }

    & figcaption {
        ${tw`text-sm text-center`}
    }

    & ul {
        list-style: disc;
        padding-left: 40px;
        margin-top: 20px;
    }

    & ol {
        list-style: decimal;
        padding-left: 40px;
        margin-top: 20px;
    }
`

export default Text;