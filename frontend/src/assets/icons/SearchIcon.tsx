import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const SearchIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000", focused = false } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.669 21.6543C21.8625 21.4622 21.863 21.1494 21.6703 20.9566L17.3049 16.5913C18.7912 14.9327 19.7017 12.7525 19.7017 10.3508C19.7017 5.18819 15.5135 1 10.3508 1C5.18819 1 1 5.18819 1 10.3508C1 15.5135 5.18819 19.7017 10.3508 19.7017C12.7624 19.7017 14.9475 18.7813 16.606 17.2852L20.9739 21.653C21.1657 21.8449 21.4765 21.8454 21.669 21.6543ZM1.9843 10.3508C1.9843 5.7394 5.7394 1.9843 10.3508 1.9843C14.9623 1.9843 18.7174 5.7394 18.7174 10.3508C18.7174 14.9623 14.9623 18.7174 10.3508 18.7174C5.7394 18.7174 1.9843 14.9623 1.9843 10.3508Z"
                fill={color}
                stroke={color}
                strokeWidth={focused ? 1.5 : 1}
                strokeLinecap="round"
                strokeLinejoin="round" />
        </Svg>
    )
}