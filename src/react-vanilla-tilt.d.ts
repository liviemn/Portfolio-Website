declare module 'react-vanilla-tilt' {
    import * as React from 'react';
  
    export interface TiltOptions {
      reverse?: boolean;
      max?: number;
      perspective?: number;
      scale?: number;
      speed?: number;
      transition?: boolean;
      axis?: null | 'x' | 'y';
      reset?: boolean;
      easing?: string;
    }
  
    export interface TiltProps {
      options?: TiltOptions;
      children?: React.ReactNode;
      className?: string;
      style?: React.CSSProperties;
    }
  
    const Tilt: React.FC<TiltProps>;
    export default Tilt;
  }
  