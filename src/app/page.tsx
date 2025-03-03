import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className='text-3xl font-bold'>Home</h1>
      <div className='flex justify-between items-center'>
        <h1>Snippets</h1>
        <Link href='/snippet/new'>
          <Button>New</Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className='border p-4 my-2 rounded-2xl flex justify-between items-center'
        >
          <h2 className='text-xl font-bold'>{snippet.title}</h2>
          <Link href={`/snippet/${snippet.id}`}>
            <Button variant={'link'}>View</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
