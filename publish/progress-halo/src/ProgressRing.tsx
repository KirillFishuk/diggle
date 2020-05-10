import React from 'react';
import { HaloProps } from './types';

function ProgressRing(props: HaloProps) {
  const {
    radius = 30,
    width = 3,
    progress = 100,
    color = 'grey',
    className,
  } = props;
  const normalizedRadius = radius - width * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <svg height={radius * 2} width={radius * 2} className={className}>
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={width}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

export default ProgressRing;