import React from "react";
import styled from "styled-components";

class Clock extends React.Component{
    render(){
        return(
            <Container>
                <CurDate>날짜</CurDate>
                <Curday>요일</Curday>
                <CurTime>시간</CurTime>
            </Container>
        );
    }
}
const Contain=styled.div``;

const CurDate = styled.div``;

const CurDay = styled.div``;

const CurTime = styled.div``;

export default Clock;