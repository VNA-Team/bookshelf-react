/// <reference types="next" />
/// <reference types="next/types/global" />

import 'twin.macro';
import styledComponent from '@emotion/styled';
import { css as cssProperty } from '@emotion/react';
import {} from '@emotion/react/types/css-prop';

declare module 'twin.macro' {
  const css: typeof cssProperty;
  const styled: typeof styledComponent;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SCHEMA_PATH: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}
