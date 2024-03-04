import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { mutate } from 'swr';

import { todosApi } from '../api';
import Loading from './Loading';

const todosUrl = 'http://localhost:8080/api/todos';

const Form = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik(
    {
      initialValues: {
        title: '',
        description: '',
      },
      onSubmit: async (values) => {
        try {
          setLoading(true);
          await todosApi.post('', {
            ...values,
            complete: false,
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
          resetForm();
          mutate(todosUrl);
        }
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .min(5, 'Must have at least 5 characters.')
          .required('Required'),
        description: Yup.string()
          .min(10, 'Must have at least 10 characters.')
          .required('Required'),
      }),
    }
  );

  return (
    <div className="w-full px-5 md:px-0 md:w-[75%] py-10">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col relative">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            type="text"
            className="border rounded px-2 py-2 mb-8 border-[#1f2544e6]"
            placeholder="Add a title"
            {...getFieldProps('title')}
          />
          {touched.title && errors.title && (
            <span className="absolute bottom-2 text-sm text-[#B31312]">
              {errors.title}
            </span>
          )}
        </div>
        <div className="flex flex-col relative">
          <label className="mb-2">Description</label>
          <input
            type="text"
            className="border rounded px-2 py-2 mb-8 border-[#1f2544e6]"
            placeholder="Add description"
            {...getFieldProps('description')}
          />
          {touched.description && errors.description && (
            <span className="absolute bottom-2 text-sm text-[#B31312]">
              {errors.description}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#1f2544] hover:bg-[#1f2544e6] text-white w-[130px] h-[40px] flex justify-center items-center rounded"
        >
          {loading ? <Loading /> : 'Add todo'}
        </button>
      </form>
    </div>
  );
};

export default Form;
