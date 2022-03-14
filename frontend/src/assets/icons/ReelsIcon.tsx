import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const ReelsIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000", focused = false } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 2.8H7C5.23269 2.8 3.8 4.23269 3.8 6V17C3.8 18.7673 5.23269 20.2 7 20.2H18C19.7673 20.2 21.2 18.7673 21.2 17V6C21.2 4.23269 19.7673 2.8 18 2.8ZM7 1C4.23858 1 2 3.23858 2 6V17C2 19.7614 4.23858 22 7 22H18C20.7614 22 23 19.7614 23 17V6C23 3.23858 20.7614 1 18 1H7Z"
                fill={focused ? '#fff' : color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 7.99995H3V6.19995H22V7.99995Z"
                fill={focused ? '#fff' : color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 6.99989L6 1.99989L7.57349 1.12573L11.5735 6.12573L10 6.99989Z"
                fill={focused ? '#fff' : color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 6.99989L12.5 1.99989L14.0735 1.12573L18.0735 6.12573L16.5 6.99989Z"
                fill={focused ? '#fff' : color}
            />
            <Path
                d="M15.75 13.0671C16.0833 13.2595 16.0833 13.7407 15.75 13.9331L10.5 16.9642C10.1667 17.1566 9.75 16.9161 9.75 16.5312L9.75 10.469C9.75 10.0841 10.1667 9.84354 10.5 10.036L15.75 13.0671Z"
                fill={focused ? '#fff' : color}
            />
        </Svg>
    )
}