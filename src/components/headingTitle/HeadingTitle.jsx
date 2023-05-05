import React from 'react'

function HeadingTitle({title}) {
  return (
    <div style={head_title}>
    <h3 style={title_style}>{title}</h3>
       
    </div>
  )
}
const head_title ={
  padding: "10px 30px",
  backgroundColor: "#fff",
}
const title_style ={
  color: "#1976d2",
  fontSize: "30px",
  fontWeight: "500",
  borderBottom: "2px solid #1976d2",
  width: "max-content",
  paddingBottom: "5px",
} 

export default HeadingTitle
