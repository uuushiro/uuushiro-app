import React, { FC } from 'react';

interface Props {
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: FC<Props> = props => {
  const { value, onChange } = props;
  return (
    <>
      <textarea value={value} onChange={onChange} ></textarea>
    </>
  );
};

export default Textarea;