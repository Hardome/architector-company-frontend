import type {NextConfig} from 'next';
import {PHASE_PRODUCTION_BUILD} from 'next/constants';

const nextConfig = (phase: string): NextConfig => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    if (
      !backendUrl ||
      !URL.canParse(backendUrl) ||
      new URL(backendUrl).protocol !== 'https:'
    ) {
      throw new Error('NEXT_PUBLIC_BACKEND_URL must be a valid HTTPS URL for production builds');
    }
  }

  return {
    output: 'standalone'
  };
};

export default nextConfig;
