module.exports = {

    confirm: id => ({
      subject: 'Boba Guide Email Verification',
      html: `
        Welcome to Boba Guide, a site where you can rate boba shops around the world. To start posting reviews, click on the link below to verify your email!
        <a href='http://localhost:3001/confirm/${id}'>
          Click here to verify your email.
        </a>
      `,      
      text: `Copy and paste this link: http://localhost:3001/confirm/${id}`
    }),
    
    reset: (id, code) => ({
      subject: "Boba Guide -- Reset Password",
      html: `
      Reset your password by clicking on the link below.
      Your code is ${code}.
      <a href='http://localhost:3001/reset-password/${id}'>
        Click here to reset your password.
      </a>
    `,
    text: `Copy and paste this link: http://localhost:3001/reset-password/${id}`
      })

  }