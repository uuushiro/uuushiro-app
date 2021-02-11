import React, { FC, useState } from 'react';
import FormItem from '../components/FormItem';
import Textarea from '../components/Textarea';
import { useCreateUserMutation }from '../../graphql/generated';

const UserForm: FC = () => {
  const [ state, setState ] = useState({
    comment: 'デフォルト知',
    last_name: '',
    first_name: '',
    password: '',
  });

  const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
    variables: {
       firstName: state.first_name,
       lastName: state.last_name,
       password: state.password
    },
 });

  const clearAllInputValue = () => {
    setState({
      comment: 'ほげほ',
      last_name: 'あふぁ',
      first_name: 'adfa',
      password: '',
    });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const name = e.target.name;

    setState((prevState) => {
      return {...prevState, [name]: e.target.value };
    });
  }

  const submitAlert = (e: React.MouseEvent) => {
    e.persist();
    e.preventDefault();
    const error = Object.values(state).some((value) => {
      return value.length === 0;
    });

    if(error) {
      alert('未入力項目があります');
    } else {
      console.log("adfad");
      createUserMutation();
    }
  }

  return (
    <>
    <h2>お問い合わせフォーム</h2>
    <form> 
      <div>
        <div>
        <FormItem title='お問い合わせ項目' required={true}></FormItem>
        </div>
        <p>
          <Textarea name="お問い合わせ内容" value={state.comment} onChange={onChangeHandler} />
        </p>
      </div>
      <hr></hr>

      <div>
        <div>
        <FormItem title='お名前' required={true}></FormItem>
        </div>
        <div>
        <p>姓<input type="text" name='last_name' value={state.last_name} onChange={onChangeHandler} /></p>
        <p>名<input type="text" name='first_name' value={state.first_name} onChange={onChangeHandler} /></p>
        </div>
      </div>
      <hr></hr>
      <div>
        <div>
        <FormItem title='パスワード' required={true}></FormItem>
        </div>
        <div>
        <p>パスワード<input type="password" name='password' value={state.password} onChange={onChangeHandler} /></p>
        </div>
      </div>
      <hr></hr>
    </form>
    <div>
      <button onClick={clearAllInputValue}>入力内容をクリア</button>
      <button onClick={submitAlert}>送信</button>
    </div>
  </>
  );
}


export default UserForm;