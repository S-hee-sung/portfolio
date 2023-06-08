import React from 'react';
import data from "./../data/portfolioData";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPortWrap = styled.div`
	width: 85%;
	max-width: 1140px;
	margin: auto;
	padding-bottom: 80px;
	> ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		> li {
			width: 32%;
			min-height: 320px;
			margin-bottom: 2%;
			position: relative;
			background-color: #191919;
			border-radius: 2px;
			overflow: hidden;
			a {
				width: 100%;
				height: 100%;
				display: inline-block;
				> div {
					height: 100%;
					padding: 20px;
					pointer-events: none;

					.info-wrap {
						position: relative;
						z-index: 1;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.txt-wrap {
							.name {
								font-weight: 500;
								font-size: 22px;
								line-height: 1.3;
								color: ${(props) => props.theme.mainColor};
							}
							.time {
								font-size: 14px;
							}
							p {
								padding: 10px 0;
								font-size: 14px;
							}
						}
						.tech {
							ul {
								display: flex;
								flex-wrap: wrap;
								margin-left: -2px;
								padding-top: 3px;
								li {
									padding: 4px;
									margin: 0 2px 5px;
									border: 1px solid #fff;
									border-radius: 2px;
									font-size: 13px;
									line-height: 1;
								}
							}
						}
						span.label {
							display: block;
							padding-bottom: 3px;
							font-size: 12px;
							font-weight: 500;
						}
					}
				}
			}
		}
	}
	@media ${(props) => props.theme.laptop} {
		> ul {
			.port-list {
				width: 49%;
				min-height: 260px;
			}
		}
	}
	@media ${(props) => props.theme.mobile} {
		width: 80%;
		padding-bottom: 60px;
		> ul {
			.port-list {
				width: 100%;
				min-height: 220px;
				margin-bottom: 20px;
				.tech {
					display: none;
				}
			}
		}
	}
`;


function PortfolioMain(props) {
	const portfolioList = data.portfolioList.map((list, idx) => {
		return (
			<li key={idx} className="port-list">
				<Link to={`/projects/${list.name}`}>
					<div>
						<div className="info-wrap">
							<div className="txt-wrap">
								<div className="name">{list.name}</div>
								<span className="time">{list.period}</span>
								<p>
									<span className="label">Description</span>
									{list.description}
								</p>
							</div>
							<div className="tech">
								<span className="label">Tech Stack</span>
								<ul>
									{list.tech.map((list, idx) => (
										<li key={idx}>{list}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</Link>
			</li>
		);	
	});

	return (
		<StyledPortWrap className="container">
			<ul>{portfolioList}</ul>
		</StyledPortWrap>
	);
}

export default PortfolioMain;