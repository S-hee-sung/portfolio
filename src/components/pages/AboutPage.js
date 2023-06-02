import React from 'react';
import styled from "styled-components";

import PageWrap from '../../organize/templates/PageWrap';
import Heading from '../../assets/Heading';
import Header from '../../organize/Header';
import SkillsWrap from '../../organize/templates/SkillsWrap';

const AboutWrapper = styled.main`
	section {
		max-width: 1140px;
		margin: auto;
		padding-bottom: 80px;
		&:not(:last-child) {
			position: relative;
			margin-bottom: 60px;
			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 500px;
				height: 1px;
				background-color: #252525;
			}
		}
		> h2 {
			margin-bottom: 40px;
			font-size: 26px;
			font-weight: 600;
			text-align: center;
		}
	}
	@media ${(props) => props.theme.mobile} {
		section {
			padding-bottom: 40px;
			&:not(:last-child) {
				&::after {
					width: 70%;
				}
			}
		}
	}
`;


function AboutPage(props) {

  return (
    <PageWrap page="about">
      <AboutWrapper>
        <Header titleBg="Skills">
          About <span className="point">Me</span>
        </Header>

        <section>
          <Heading level="2">MY SKILLS</Heading>
					<SkillsWrap />
        </section>

      </AboutWrapper>
    </PageWrap>
    );
}

export default AboutPage;