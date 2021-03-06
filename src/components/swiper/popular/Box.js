import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Box = ({ road, per }) => (
    <Wrap className="swiper-slide">
        {per.map((each, i) => (
            <Link to={`${road}/selected/${each.pathname}`} key={i}>
                <Item>
                    <img src={each.icon} alt="" />
                    <div>
                        <h4>{each.title}</h4>
                        <p>{each.summary}</p>
                        <button type="button">열기</button>
                    </div>
                </Item>
            </Link>
        ))}
    </Wrap>
);

const Wrap = styled.div`
    &.swiper-slide {
        max-width: 90%;
        height: auto;
        /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
        margin-bottom: 2rem;

        &:first-child {
            margin-left: -2%;
        }
        &:last-child {
            margin-right: -2%;
        }

        @media (min-width: 768px) {
            & {
                max-width: 350px;

                &:first-child {
                    margin-left: initial;
                }
                &:last-child {
                    margin-right: initial;
                }
            }
        }
    }
`;

const Item = styled.div`
    display: flex;
    margin-top: 1rem;

    & img {
        display: block;
        width: 100%;
        height: 100%;
        max-width: 90px;
        max-height: 100%;
        object-fit: contain;
        border-radius: 22.5%;

        @media (min-width: 768px) {
            max-width: 100px;
        }
    }

    & > div {
        flex: 1;
        position: relative;
        padding-left: 1rem;

        h4 {
            display: inline-block;
            width: 100%;
            max-width: 231px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p {
            font-size: 0.8rem;
            color: rgba(0, 0, 0, 0.4);
            display: inline-block;
            width: 100%;
            max-width: 231px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            line-height: 1.2;
            height: 2rem;
            text-align: left;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        button {
            position: absolute;
            bottom: 0;
            width: 65px;
            height: 25px;
            line-height: 25px;
            background-color: rgba(245, 245, 245, 1);
            color: rgba(71, 144, 181, 1);
            font-size: 0.8rem;
            border-radius: 20px;
            border: none;
        }
    }
`;

export default Box;
