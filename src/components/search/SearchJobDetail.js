import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useGlobalDataContext } from "../../App";
import { theme } from "../../mui-theme";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";

const SearchItemDetail = () => {

    const { itemDetail, setSearchModal } = useGlobalDataContext();
    let {
        jobName,
<<<<<<< HEAD:src/components/search/SearchJobDetail.js
        // category, 
=======
        //category, 
>>>>>>> 0c35607afdfd1f28d17b764a988c1b75459252fa:src/components/search/SearchItemDetail.js
        description, 
        compensation, 
        duration, 
        employer, 
        date,
        lang,
<<<<<<< HEAD:src/components/search/SearchJobDetail.js
        // jobId,
=======
        //jobId,
>>>>>>> 0c35607afdfd1f28d17b764a988c1b75459252fa:src/components/search/SearchItemDetail.js
    } = itemDetail;

    const handleClose = e => {
        e.stopPropagation();
        e.preventDefault();
        if(e.target.matches('#item-parent')) setSearchModal(false)
        else return 
    }
    
    return (
        <>
            <Container onClick={ e => handleClose(e) } id="item-parent">
                <ContentContainer id="search-item-detail">
                    <SubContainer1>
                    <BackLink>
                        <Button
                            variant="text"
                            startIcon={<Close htmlColor={theme.palette.warning.main} fontSize="small"/>}
                            onClick={ () => setSearchModal(false) }
                        >
                            Close
                        </Button>
                    </BackLink>
                        <ItemHeader>{ jobName }</ItemHeader>
                        <ItemBody>{ description }</ItemBody>
                        <ItemTag>
                            { lang.sort().map( tag => <TagContent key={tag + Date.now()}>{ tag }</TagContent> ) }
                        </ItemTag>
                        <ItemInfo>
                            <ItemInfoContent>Rate: <span>${ compensation }/hour</span></ItemInfoContent>
                            <ItemInfoContent>
                                Duration:&nbsp;
                                <span>
                                { duration >= 1 ? duration : 4 * duration }
                                {
                                    duration < 1 ?
                                    ( 4 * duration === 1 ? ' week' : ' weeks' ) :
                                    ( duration > 1 ? ' months' : ' month')
                                }
                            </span>
                            </ItemInfoContent>
                            <ItemInfoContent>Posted: <span>{ date }</span></ItemInfoContent>
                        </ItemInfo>
                        <ItemInfo>
                                <ItemInfoContent>
                                    Employer: <u>{employer}</u>
                                </ItemInfoContent>
                        </ItemInfo>
                    </SubContainer1>
                    <SubContainer2>
                        
                    </SubContainer2>
                </ContentContainer>
            </Container>
        </>
    )
}

export default SearchItemDetail

const entrance = keyframes`
    to {
        transform: translateX(0%);
        opacity: 1;
    }
`

const Container = styled.div`
    position: fixed;
    top: 4rem; right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #37474fb5;
    width: 100%;
    height: calc(100vh - 4rem);
    /* min-height: 36rem; */
    z-index: 99;

    @media (max-width: 48rem) {
        height: calc(100vh - 3rem);
        top: 3rem;
    }
`
const ContentContainer = styled.div`
    display: flex;
    text-decoration: none;
    padding: 2rem;
    height: max-content;
    width: calc(100% - 10rem);
    max-width: 75rem;
    background-color: #ffffff;
    border-radius: 1rem;
    transform: translateX(50%);
    opacity: 0;
    animation: ${entrance} .3s ease-out forwards;

    @media (max-width: 48rem) {
        flex-direction: column;
        padding: 1rem;
        width: calc(100% - 1rem);
    }
`
const BackLink = styled.a`
    display: inline-block;
    text-decoration: none;
    color: var(--color2);
    font-family: var(--font2);
    transform: translate(-30%, -40%);

    @media (max-width: 48rem) {
        transform: translate(0, 0)
    }
`

const SubContainer1 = styled.div`
    padding: 0 2rem 1rem 1rem;
    width: 75%;

    @media (max-width: 48rem) {
        width: 100%;
    }
`
const SubContainer2 = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--gray);
    width: 25%;

    @media (max-width: 48rem) {
        width: 100%;
        padding: 2rem;
        margin: 0;
    }
`

const ItemHeader = styled.h3`
    color: ${theme.palette.primary.main};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -8%;
`
const ItemBody = styled.p`
    margin-left: .125rem;
    font-size: 1rem;
    color: ${theme.palette.grey[800]};
    font-family: var(--font3);
    font-weight: 300;
    line-height: 160%;
    letter-spacing: -.25px;
    overflow: hidden;
`
const ItemTag = styled.div`
    font-size: .875rem;
    font-weight: 500;
    color: ${theme.palette.grey[700]};
`
const TagContent = styled.span`
    display: inline-block;
    padding: .125rem .5rem;
    border-radius: 1rem;
    background-color: ${theme.palette.grey[50]};
    margin-right: .5rem;
    margin-top: .5rem;
`
const ItemInfo = styled.div`
    color: ${theme.palette.grey[700]};
    font-size: .75rem;
    margin-top: .5rem;
`
const ItemInfoContent = styled.span`
    display: inline-block;
    margin-right: 1rem;
    font-weight: 500;
    margin-top: .5rem;

    span {
        color: ${theme.palette.secondary.main};
        font-weight: 600;
    }
`