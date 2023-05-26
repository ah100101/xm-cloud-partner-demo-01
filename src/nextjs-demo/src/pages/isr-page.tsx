/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { GetStaticProps } from 'next/types';

export default function ISRPage({ serverDate }: { serverDate: string }) {
  return (
    <div>
      <h1>Incremental Static Regeneration (ISR) Page</h1>

      <div>{serverDate}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const serverDate = new Date().toString();
  return {
    props: {
      serverDate,
    },
    revalidate: 3600,
  };
};

