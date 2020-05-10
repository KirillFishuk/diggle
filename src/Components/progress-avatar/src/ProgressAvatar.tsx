import React from 'react';
import styled from 'styled-components';
import ProgressHalo from 'progress-halo';
import avatar_img from './avatar.png';
import './styles.css';

const Wrapper = styled.div``;

const CustomAvatar = styled.img``;

const StyledProgressHalo = styled(ProgressHalo)``;


interface ComponentProps {
  progress?: number,
  color?: string,
  progressColor?: string,
  radius?: number,
  width?: number,
}

export function ProgressAvatar(props: ComponentProps) {
  const { progress, color, progressColor, radius = 60, width } = props;
  return (
    <Wrapper className='progress-avatar__wrapper'>
      {/*your custom avatar component or any other component*/}
      <CustomAvatar src={avatar_img} className='progress-avatar__image'/>
      <StyledProgressHalo
        progress={progress}
        color={color}
        progressColor={progressColor}
        radius={radius}
        width={width}
        className='progress-avatar__halo'
      />
    </Wrapper>
  );
}