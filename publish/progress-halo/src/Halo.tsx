import React from 'react';
import styled from 'styled-components';
import ProgressRing from './ProgressRing';
import { HaloProps } from './types';

const StyledHalo = styled.div<HaloProps>`
  position: relative;
  height: ${({radius = 30}) => radius * 2}px;
  width: ${({radius = 30}) => radius * 2}px;
  cursor: pointer;
  circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  svg:first-child {
    position: absolute;
    left: 0;
  }
  svg:last-child {
    position: relative;
  }
`;

const blueGray = '#57627C';
const lemon = '#FEE815';

export function ProgressHalo(props: HaloProps) {
  const {
    progress = 30,
    color = blueGray,
    progressColor = lemon,
    radius = 30,
    width = 3,
    className,
  } = props;
  return (
    <StyledHalo radius={radius} className={className}>
      <ProgressRing radius={radius} width={width} color={color} />
      <ProgressRing
        radius={radius}
        width={width}
        progress={progress}
        color={progressColor}
      />
    </StyledHalo>
  );
}

