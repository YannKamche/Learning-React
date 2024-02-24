import React from 'react'
import './styles.css'

const StyleSheet = (props) => {
    const primary = props.primary == true ? 'primary': ''
  return (
    <div>
      <h1 className={`font-xl ${primary}`}>StyleSheets</h1>
    </div>
  )
}

export default StyleSheet
