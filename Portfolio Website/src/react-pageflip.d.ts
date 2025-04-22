declare module 'react-pageflip' {
    import * as React from 'react';
  
    interface HTMLFlipBookProps {
      children: React.ReactNode;
      width: number;
      height: number;
      size?: 'fixed' | 'stretch';
      minWidth?: number;
      maxWidth?: number;
      minHeight?: number;
      maxHeight?: number;
      maxShadowOpacity?: number;
      showCover?: boolean;
      mobileScrollSupport?: boolean;
      className?: string;
      style?: React.CSSProperties;
      startPage?: number;
      drawShadow?: boolean;
      flippingTime?: number;
      useMouseEvents?: boolean;
      clickEventForward?: boolean;
      usePortrait?: boolean;
      startZIndex?: number;
      autoSize?: boolean;
      swipeDistance?: number;
      showPageCorners?: boolean;
      disableFlipByClick?: boolean;
      onFlip?: (e: any) => void;
      onChangeOrientation?: (e: any) => void;
      onChangeState?: (e: any) => void;
    }
  
    const HTMLFlipBook: React.FC<HTMLFlipBookProps>;
  
    export default HTMLFlipBook;
  }
  