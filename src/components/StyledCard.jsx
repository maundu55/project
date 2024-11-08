import React from 'react'

const StyledCard = () => {
    const styles = {backgroundColor: 'lightblue', padding:'20px', borderRadius:'10px', color:'darkblue'};
  return (
    <div>
      <h3 style={styles}>I am an Inline style</h3>
    </div>
  )
}

export default StyledCard