declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'auto-rotate'?: boolean;
      'camera-controls'?: boolean;
      'rotation-per-second'?: string;
      'interaction-prompt'?: string;
      loading?: string;
      style?: React.CSSProperties;
    };
  }
}

export {};
