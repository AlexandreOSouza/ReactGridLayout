import styled from 'styled-components'

export const Grid = styled.div`
    border: 1px solid red;
`;

export const Row = styled.div`
    display: flex;
`;

const media = {
    xs: (styles) => `
        @media only screen and (max-width: 500px) {
            ${styles}
        }
    `,
}

export const Col = styled.div`
    flex: ${(props) => props.size};
    border: 1px dashed green;
    ${(props) => props.collapse && media[props.collapse](`
        display: none;
    `)}
`;
