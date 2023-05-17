import React from 'react'
import { useDispatch } from 'react-redux'
import { makeSearch } from '../../features/blog/blogSlice'
import { DebounceInput } from 'react-debounce-input'

const StripeListHeader = () => {
  let dispatch = useDispatch()
  let [input, setInput] = React.useState('')

  function handleChange(event) {
    setInput(event.target.value)
  }

  React.useEffect(() => {
    dispatch(makeSearch(input))
  }, [input, dispatch])

  return (
    <div class='flex items-center justify-between py-5 lg:py-6'>
      <label class='relative hidden sm:flex w-3/4 md:w-2/4 mx-auto'>
        <DebounceInput
          type='text'
          name='search'
          debounceTimeout={500}
          onChange={handleChange}
          class='form-input peer h-10 w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 text-xs+ placeholder:text-slate-500 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
          placeholder='Search by blog title...'
        />
        <span class='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6 transition-colors duration-200'
            fill='currentColor'
            viewbox='0 0 24 24'
          >
            <path d='M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z' />
          </svg>
        </span>
      </label>
    </div>
  )
}

export default StripeListHeader
