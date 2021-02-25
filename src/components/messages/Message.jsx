import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Message = ({name, body, date}) => {
  return (
    <Card>
      <CardContent>
        <Typography><span>Sender:</span> {name}</Typography>
        <Typography><span>Body:</span>{body}</Typography>
        <Typography><span>Date:</span>{date}</Typography>
      </CardContent>
    </Card>
  )
}

export default Message
