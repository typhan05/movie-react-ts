import { useContext } from 'react'
import Form from '../../../../components/Form'
import Input from '../../../../components/Form/Input'
import Select from '../../../../components/Form/Select'
import { MovieTypeOptions, PlotTypeOptions, YearOptions } from '../../../../constants/type'
import { MovieContext } from '../../../../context/MovieContext'

const SearchForm = () => {
  const { form, onSubmit } = useContext<any>(MovieContext)
  return (
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <div className='flex flex-wrap items-center px-3 py-5 mb-4 gap-4 bg-gray-800 rounded-lg text-black'>
        <Input form={form} name='search' type='search' placeholder='Search title movie...' required={true} />
        <Select form={form} name='type' options={MovieTypeOptions} isStringVal />
        <Select form={form} name='plot' options={PlotTypeOptions} isStringVal />
        <Select form={form} name='year' options={YearOptions} />
        <button className='bg-[#f20751] hover:bg-red-500 text-white font-bold py-2 px-7 rounded-full w-full lg:w-max h-11'>
          Search
        </button>
      </div>
    </Form>
  )
}

export default SearchForm
