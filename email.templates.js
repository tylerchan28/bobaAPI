module.exports = {

  confirm: id => ({
    subject: 'Boba Guide Email Verification',
    html: `
      <a href='http://localhost:3001/confirm/${id}'>
        Click here to verify your email.
      </a>
    `,      
    text: `Copy and paste this link: http://localhost:3001/confirm/${id}`
  })
  
}