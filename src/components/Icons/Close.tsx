import { JSX } from 'react/jsx-runtime'

const Close = (): JSX.Element => {
  return (
    <svg className='close-icon' fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M6 18L18 6M6 6L18 18" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </svg>
  )
}

export default Close