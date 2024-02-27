import React from 'react'

const MemoComp = ({name}) => {
    console.log("Memo Component")
  return (
    <div>
      This is the Memo Component {name}
    </div>
  )
}

export default React.memo(MemoComp)
