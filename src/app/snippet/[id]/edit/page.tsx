import EditSnippetForm from '@/components/EditSnippetForm';
import { prisma } from '@/lib/prisma';

const EditPageSnippet = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = Number((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) {
    return <div>Snippet not found</div>;
  }
  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditPageSnippet;
