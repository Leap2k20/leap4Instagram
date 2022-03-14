import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const HomeIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000", focused = false } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill={focused ? color : 'none'}>
            <Path
                d="M2.45307 11.751L11.9773 2.02175L21.5015 11.751C21.7906 12.0463 21.9545 12.4468 21.9545 12.8711V20.4556C21.9545 20.7747 21.7037 21 21.4427 21H15.964C15.713 21 15.4721 20.7849 15.4721 20.476V15.8886C15.4721 13.9497 13.9267 12.34 11.9773 12.34C10.0279 12.34 8.48244 13.9497 8.48244 15.8886V20.476C8.48244 20.7849 8.24157 21 7.99053 21H2.51187C2.25085 21 2 20.7747 2 20.4556V12.8711C2 12.4468 2.16397 12.0463 2.45307 11.751Z"
                stroke={color}
                strokeWidth="2"
            />
        </Svg>
    )
}