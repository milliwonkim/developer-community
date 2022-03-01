import { ExpandMoreOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from '../../reducer/StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <Container>
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
        </Container>
    );
}

export default Sidebar;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 16px;
    margin-top: 16px;
    min-width: 340px;
    max-width: 500px;

    @media (max-width: 1300px) {
        width: 100%;
    }
`;
