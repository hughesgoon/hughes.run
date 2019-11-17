import React from 'react'

const titleStyle = {
    border: "none",
    marginBottom: "0.4rem",
}

const subtitleStyle = {
    marginTop: "0px",
}

export const PostTitle = ({ title, subtitle }) => <div><h1 style={titleStyle}>{title}:</h1> <h2 style={subtitleStyle}>{subtitle}</h2></div>
