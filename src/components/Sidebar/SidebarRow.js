import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';

function SidebarRow({ src, Icon, title }) {
    return (
        <Row>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </Row>
    );
}

export default SidebarRow;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
        border-radius: 10px;
    }

    h4 {
        margin-left: 20px;
        font-weight: 600;
    }

    & .MuiSvgIcon-root {
        font-size: xx-large;
        color: #2e81f4;
    }
`;
