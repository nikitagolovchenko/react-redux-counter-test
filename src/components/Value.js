import React from 'react'

export default function Value(props) {
  return (
    <div className="value-holder">
      <span className="value">{props.value}</span>
    </div>
  )
}
