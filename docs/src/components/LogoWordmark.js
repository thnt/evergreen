import React from 'react'

export default class LogoIcon extends React.PureComponent {
  render() {
    return (
      <svg
        height="32px"
        viewBox="0 0 154 32"
        aria-labelledby="title"
        style={{ display: 'block' }}
        {...this.props}
      >
        <title>Evergreen</title>
        <defs>
          <polygon id="a" points="16 7 23 21 9 21" />
        </defs>
        <g
          transform="translate(-33.000000, -66.000000) translate(33.000000, 66.000000)"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M50.769 19.803H45.02v-3.2h5.423v-2.039H45.02v-3.058h5.748V9.317h-8.402V22h8.402v-2.197zM60.689 22L64.95 9.317h-2.892l-2.9 9.95h-.062l-2.9-9.95h-2.97L57.488 22h3.2zm15.306-2.197h-5.748v-3.2h5.423v-2.039h-5.423v-3.058h5.748V9.317h-8.402V22h8.402v-2.197zm5.92-8.411v4.043h2.286c1.336 0 2.118-.765 2.118-2.022 0-1.23-.826-2.021-2.145-2.021h-2.258zm0 5.967V22h-2.654V9.317h5.195c2.918 0 4.588 1.538 4.588 4.043 0 1.626-.844 3.033-2.303 3.604L89.413 22h-3.006l-2.364-4.64h-2.127zm21.557-.685V15.24h-5.344v1.934h2.76l-.01.202c-.052 1.573-1.256 2.637-2.987 2.637-2.11 0-3.446-1.679-3.446-4.43 0-2.698 1.257-4.29 3.349-4.29 1.433 0 2.514.792 2.9 2.12h2.663c-.378-2.567-2.61-4.316-5.572-4.316-3.726 0-6.047 2.46-6.047 6.521 0 4.122 2.32 6.6 6.109 6.6 3.533 0 5.625-2.091 5.625-5.545zm5.753-5.282v4.043h2.285c1.336 0 2.118-.765 2.118-2.022 0-1.23-.826-2.021-2.144-2.021h-2.259zm0 5.967V22h-2.654V9.317h5.194c2.918 0 4.588 1.538 4.588 4.043 0 1.626-.844 3.033-2.303 3.604L116.722 22h-3.006l-2.364-4.64h-2.127zm18.62 2.444h-5.748v-3.2h5.423v-2.039h-5.423v-3.058h5.748V9.317h-8.402V22h8.402v-2.197zm11.669 0h-5.748v-3.2h5.423v-2.039h-5.423v-3.058h5.748V9.317h-8.403V22h8.403v-2.197zM145.32 22v-8.306h.079L151.332 22h2.197V9.317h-2.54v8.262h-.07l-5.924-8.262h-2.215V22h2.54z"
            fill="#1F4160"
          />
          <circle fill="#38A065" cx={16} cy={16} r={16} />
          <rect fill="#FFF" x={15} y={22} width={2} height={4} />
          <use fill="#FFF" fillRule="evenodd" xlinkHref="#a" />
          <path
            stroke="#FFF"
            strokeWidth="1.5"
            d="M16 8.677L10.214 20.25h11.572L16 8.677z"
          />
        </g>
      </svg>
    )
  }
}