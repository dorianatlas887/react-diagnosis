import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

export const DownloadIcon = props => (
  <SvgIcon {...props} viewBox='0 0 12.963 14.983'>
    <g transform='translate(12.972 14.983) rotate(180)'>
      <path d='M3.7,11.457H9.26V6.169h3.7L6.482,0,0,6.169H3.7Z' transform='translate(0.009)' />
      <rect width='12.964' height='1.763' transform='translate(0.009 13.22)' />
    </g>
  </SvgIcon>
);

export const EmailIcon = props => (
  <SvgIcon {...props} viewBox='0 0 17 11.131'>
    <g transform='translate(0 -64.486)'>
      <g transform='translate(0.856 64.486)'>
        <g transform='translate(0 0)'>
          <path d='M32.255,64.49H20.627a2.672,2.672,0,0,0-1.82.6l.659.426,5,3.24a.364.364,0,0,1,.131.08l1.82,1.183,6.993-4.5.663-.43A2.855,2.855,0,0,0,32.255,64.49Z' transform='translate(-18.807 -64.486)' />
        </g>
      </g>
      <g transform='translate(0 65.647)'>
        <g transform='translate(0 0)'>
          <path d='M1.012,90.4.4,90A2.974,2.974,0,0,0,0,91.506l0,5.785a2.883,2.883,0,0,0,.539,1.722l.517-.535,4.765-4.951Z' transform='translate(0 -89.999)' />
        </g>
      </g>
      <g transform='translate(1.06 69.579)'>
        <g transform='translate(0 0)'>
          <path d='M37.645,181.437l-4.86-5.038-1.857,1.2-.062.029h-.029a.363.363,0,0,1-.091,0,.363.363,0,0,1-.091,0h-.029l-.087-.029L28.7,176.406l-4.886,5.046-.524.542a2.785,2.785,0,0,0,1.616.441h11.65a2.934,2.934,0,0,0,1.605-.466Z' transform='translate(-23.287 -176.399)' />
        </g>
      </g>
      <g transform='translate(11.191 65.651)'>
        <g transform='translate(0 0)'>
          <path d='M251.734,97.367V91.593a2.847,2.847,0,0,0-.382-1.514l-.619.4-4.806,3.113,4.762,4.955.521.542A2.727,2.727,0,0,0,251.734,97.367Z' transform='translate(-245.927 -90.079)' />
        </g>
      </g>
    </g>
  </SvgIcon>
);

export const VideoIcon = props => (
  <SvgIcon {...props} viewBox='0 0 18.5 11.398'>
    <g transform='translate(0 -70.229)'>
      <g transform='translate(0 70.229)'>
        <g transform='translate(11.779 0.973)'>
          <path d='M237.9,98.937h0a1.673,1.673,0,0,1-1.1-.419l-3.167-2.753a2.131,2.131,0,0,1,0-3.124l3.167-2.754a1.672,1.672,0,0,1,1.95-.176,2.023,2.023,0,0,1,.923,1.738v5.507a2.021,2.021,0,0,1-.924,1.738A1.644,1.644,0,0,1,237.9,98.937Z' transform='translate(-232.961 -89.477)' />
        </g>
        <g transform='translate(0 0)'>
          <path d='M9.982,81.627H1.417A1.418,1.418,0,0,1,0,80.211V71.645a1.418,1.418,0,0,1,1.417-1.416H9.982A1.418,1.418,0,0,1,11.4,71.645v8.566A1.418,1.418,0,0,1,9.982,81.627Z' transform='translate(0 -70.229)' />
        </g>
      </g>
    </g>
  </SvgIcon>
);

export const CheckIcon = props => (
  <SvgIcon {...props} viewBox='0 0 19.242 14.243'>
    <g id='Group_70' data-name='Group 70' transform='translate(2.121 2.121)'>
      <line x2='5' y2='5' transform='translate(0 5)' />
      <line y1='10' x2='10' transform='translate(5)' />
    </g>
  </SvgIcon>
);

export const XIcon = withStyles(() => ({
  root: {
    fontSize: 'inherit',
  },
  white: {
    fill: 'none',
    stroke: '#fff',
    strokeLinecap: 'round',
    strokeMiterlimit: 10,
    strokeWidth: 2,
  },
  transparent: {
    fill: 'rgba(0,0,0,0)',
  },
}))(props => (
  <SvgIcon viewBox='0 0 18.569 18.528' className={props.classes.root}>
    <g transform='translate(0 0)'>
      <rect className={props.classes.transparent} width='18.569' height='18.528' />
      <g>
        <circle cx='9.264' cy='9.264' r='9.264' />
        <path className={props.classes.white} d='M0,6.67,3.335,3.335,6.67,0' transform='translate(5.929 5.929)' />
        <path className={props.classes.white} d='M0,0,3.335,3.335,6.67,6.67' transform='translate(5.929 5.929)' />
      </g>
    </g>
  </SvgIcon>
));
