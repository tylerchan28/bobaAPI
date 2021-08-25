module.exports = {

    confirm: id => ({
      subject: 'Boba Guide Email Verification',
      html: `
        Welcome to Boba Guide, a site where you can rate boba shops around the world. To start posting reviews, click on the link below to verify your email!
        <a href='https://boba-guide-tyler.herokuapp.com/confirm/${id}'>
          Click here to verify your email.
        </a>
      `,      
      text: `Copy and paste this link: https://boba-guide-tyler.herokuapp.com/confirm/${id}`
    }),
    
    reset: (id, code) => ({
      subject: "Boba Guide -- Reset Password",
      html: `
      Reset your password by clicking on the link below.
      Your code is ${code}.
      <a href='https://boba-guide-tyler.herokuapp.com/reset-password/${id}'>
        Click here to reset your password.
      </a>
    `,
    text: `Copy and paste this link: https://boba-guide-tyler.herokuapp.com/reset-password/${id}`
      })

  }