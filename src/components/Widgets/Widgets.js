import React from 'react';
import styled from 'styled-components';

function Widgets() {
    return (
        <Container>
            <iframe
                title='kiwon'
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprogrammersgrepp&tabs=timeline&width=340&height=760&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
                width='340'
                height='732'
                style={{ border: 'none' }}
                scrolling='no'
                frameBorder='0'
                allowFullScreen={true}
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
            />
        </Container>
    );
}

export default Widgets;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    max-width: 1000px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 16px;
    margin-top: 16px;
`;
