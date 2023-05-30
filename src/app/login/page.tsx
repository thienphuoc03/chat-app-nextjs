'use client';

import Button from '@/components/ui/Button';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

interface Props {}

const page = ({}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn('google');
    } catch (error) {
      toast.error('Something went wrong with your login.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {isLoading ? null : (
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                enable-background="new 0 0 128 128"
                id="Social_Icons"
                version="1.1"
                viewBox="0 0 128 128"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="_x31__stroke">
                  <g id="Google">
                    <rect
                      clip-rule="evenodd"
                      fill="none"
                      fill-rule="evenodd"
                      height="128"
                      width="128"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M27.585,64c0-4.157,0.69-8.143,1.923-11.881L7.938,35.648    C3.734,44.183,1.366,53.801,1.366,64c0,10.191,2.366,19.802,6.563,28.332l21.558-16.503C28.266,72.108,27.585,68.137,27.585,64"
                      fill="#FBBC05"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M65.457,26.182c9.031,0,17.188,3.2,23.597,8.436L107.698,16    C96.337,6.109,81.771,0,65.457,0C40.129,0,18.361,14.484,7.938,35.648l21.569,16.471C34.477,37.033,48.644,26.182,65.457,26.182"
                      fill="#EA4335"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M65.457,101.818c-16.812,0-30.979-10.851-35.949-25.937    L7.938,92.349C18.361,113.516,40.129,128,65.457,128c15.632,0,30.557-5.551,41.758-15.951L86.741,96.221    C80.964,99.86,73.689,101.818,65.457,101.818"
                      fill="#34A853"
                      fill-rule="evenodd"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M126.634,64c0-3.782-0.583-7.855-1.457-11.636H65.457v24.727    h34.376c-1.719,8.431-6.397,14.912-13.092,19.13l20.474,15.828C118.981,101.129,126.634,84.861,126.634,64"
                      fill="#4285F4"
                      fill-rule="evenodd"
                    />
                  </g>
                </g>
              </svg>
            )}
            Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
