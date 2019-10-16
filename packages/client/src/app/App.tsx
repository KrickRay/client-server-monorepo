import { Layout } from "antd";
import React from "react";
import styled from "styled-components";

import { Index } from "../pages/Index";

const { Content, Footer } = Layout;

const StyledLayout = styled(Layout)`
    min-height: 100vh;
`;

const StyledContent = styled(Content)`
    margin: 24px 16px 0;
    overflow: initial;
    display: flex;
    flex-direction: column;
    & > * {
        &:first-child {
            margin-top: 0;
        }

        margin-top: 20px;
    }
`;

const StyledFooter = styled(Footer)`
    text-align: center;
`;

export const App: React.FC = () => (
    <StyledLayout>
        <StyledContent>
            <Index />
        </StyledContent>
        <StyledFooter>Base ©{new Date().getFullYear()}</StyledFooter>
    </StyledLayout>
);
