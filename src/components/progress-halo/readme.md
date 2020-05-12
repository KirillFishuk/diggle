## progress-halo
:dizzy: React component, for adding dynamic progress ring around other components, for example around user avatar.

### Examples
https://kirillfishuk.de/posts/progress-halo
 
### Install
If you're using npm:

```
npm install progress-halo --save
```

If you're using yarn:

```
yarn add progress-halo
```
### Usage
In react component:
``` javascript
import React from 'react';
import ProgressHalo from 'progress-halo';

function ProgressAvatar(props) {
  const { progress, color, progressColor, radius = 60, width } = props;
  return (
    <Wrapper>
      {/*your custom avatar component or any other component*/}
      <CustomAvatar src={avatar_img} />
      <ProgressHalo
        progress={progress}
        color={color}
        progressColor={progressColor}
        radius={radius}
        width={width}
      />
    </Wrapper>
  );
}

export default ProgressAvatar;
```
Positioning with styled-components (preferred): 
``` javascript
import styled from 'styled-components';
import ProgressHalo from 'progress-halo';

const Wrapper = styled.div`
  position: relative;
`;

const CustomAvatar = styled.img`
  max-width: 100px;
`;

const StyledProgressHalo = styled(ProgressHalo)`
  position: absolute;
  top: -10px;
  left: -10px;
`;
```
Positioning with css: 
``` css
.progress-avatar__wrapper {
  position: relative;
}

.progress-avatar__image {
  max-width: 100px;
}

.progress-avatar__halo {
  position: absolute !important;  /*need this to overwrite default inline style*/
  top: -10px;
  left: -10px;
}
```
### Props
Props | Description |
--- | :---: |
`progress?: number` |set current progress value in percentage |
`color?: string` | hex color code for basic fill 
`progressColor?: string` | hex color code for progress part
`radius?: number` | radius of the ring
`width?: number` | width of the ring, use integer number
`className?: string` | css class name for styling

* changing of progress property has smooth animation
