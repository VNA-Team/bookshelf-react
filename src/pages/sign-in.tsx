import React from 'react';
import Head from 'next/head';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { useSignInMutation } from 'src/graphql';
import { Button } from 'src/components';

function SignIn() {
  const router = useRouter();
  const [signInMutation, { loading: isSigningIn }] = useSignInMutation({
    onCompleted({ signIn: { token } }) {
      localStorage.setItem('token', token);
      router.replace('/');
    },
  });

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
    } = ((event.target as HTMLFormElement).elements as unknown) as {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };

    signInMutation({ variables: { email, password } }).catch(() => {});
  };

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>

      <main css={tw`w-screen h-screen flex items-center justify-center`}>
        <form css={tw`grid grid-flow-row row-gap-5 w-64`} onSubmit={handleSignIn}>
          <h1 css={tw`prose prose-2xl text-center`}>Sign in</h1>

          <div css={tw`grid grid-flow-row row-gap-1`}>
            <label htmlFor="email" css={tw`prose prose-sm`}>
              Email
            </label>
            <input
              id="email"
              name="email"
              css={tw`shadow-md appearance-none px-4 py-2 rounded text-sm leading-normal text-gray-700`}
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div css={tw`grid grid-flow-row row-gap-1`}>
            <label htmlFor="password" css={tw`prose prose-sm`}>
              Password
            </label>

            <input
              id="password"
              name="password"
              css={tw`shadow-md appearance-none px-4 py-2 rounded text-sm leading-normal text-gray-700`}
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <Button type="submit" disabled={isSigningIn}>
            Sign in
          </Button>
        </form>
      </main>
    </>
  );
}

export default SignIn;
