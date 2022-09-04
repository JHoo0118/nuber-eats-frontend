import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

interface EnterForm {
  email: string;
  password: string;
}

const Enter: NextPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterForm>();
  const onSubmit = () => {
    console.log(watch());
  };
  const onInvalid = () => {
    console.log('cant create account');
  };
  return (
    <div>
      <h1>Logged Out</h1>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div>
          <input
            {...register('email', {
              required: 'This is required',
              pattern: /^[A-Za-z0-9._%+-]+@gmail.com$/,
            })}
            type="email"
            placeholder="email"
          />
          {errors.email?.message && <span className="font-bold text-red-600">{errors.email?.message}</span>}
          {errors.email?.type === 'pattern' && <span className="font-bold text-red-600">Only gmail allowed</span>}
        </div>
        <div>
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button className="bg-yellow-300 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Enter;
