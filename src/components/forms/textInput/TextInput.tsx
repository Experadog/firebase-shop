import React from 'react';



interface IForwardRef {
  type: string
  placeholder: string
}

const TextInput = React.forwardRef(({
  type="",
  placeholder="",
  ...rest
}: IForwardRef, ref: any) => 
  <input
    type={type}
    placeholder={placeholder}
    {...rest}
    ref={ref}
  />
)

export default TextInput;