import React from 'react'
import NumberFormat from 'react-number-format'

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void
  onChange: (event: { target: { id: string; value: string } }) => void
  id: string
}

export default function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            id: props.id,
            value: values.value
          }
        })
      }}
      thousandSeparator
      isNumericString
    />
  )
}
