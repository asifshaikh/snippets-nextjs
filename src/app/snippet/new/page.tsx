'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useActionState } from 'react';
import * as actions from '@/actions';

const CreateSnippetPage = () => {
  const [formStateData, createSnippet] = useActionState(actions.createSnippet, {
    message: '',
  });
  return (
    <form action={createSnippet}>
      <div>
        <Label>Title</Label>
        <Input type='text' name='title' id='title'></Input>
      </div>
      <div>
        <Label>Code</Label>
        <Textarea name='code' id='code'></Textarea>
      </div>
      {formStateData.message && (
        <div className='mt-2 border-2 p-2 bg-red-300 border-red-500 '>
          {formStateData.message}
        </div>
      )}
      <Button type='submit' className='mt-4'>
        New
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
