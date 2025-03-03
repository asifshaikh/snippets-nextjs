import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { deleteSnippet } from '@/actions';
type SnippetDetailProps = {
  params: Promise<{ id: string }>;
};
const SnippetDetailPage = async ({ params }: SnippetDetailProps) => {
  const id = Number((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  const deleteSnippetAction = deleteSnippet.bind(null, id);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>{snippet?.title}</h1>
        <div className='flex items-center gap-2'>
          <Link href={`/snippet/${id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant={'destructive'}>Delete</Button>
          </form>
        </div>
      </div>
      <pre className='bg-gray-900 text-white p-4 rounded-lg mt-4'>
        <code>{snippet?.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
