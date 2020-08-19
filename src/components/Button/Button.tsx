import React from 'react';
import tw from 'twin.macro';

type Props = React.ComponentPropsWithoutRef<'button'>;

function Button({ children, ...rest }: Props) {
  return (
    <button
      {...rest}
      css={tw`bg-blue-700 rounded text-gray-100 px-4 py-2 text-sm leading-normal uppercase font-bold shadow-md hover:bg-blue-600 transition duration-200 ease-in select-none disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed disabled:shadow-none`}
    >
      {children}
    </button>
  );
}

export { Button };
