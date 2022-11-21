import React from 'react';

function Projects() {
  return (
    <div> <div className="contact" id="contact">
    <div />
    <div className="input">
      <h2>Contact me</h2>
      <form>
        <input type="text" placeholder="name" /><br /><br />
        <input type="email" placeholder="email" /><br /><br />
        <input type="number" placeholder="phone" /><br /><br />
        <textarea rows={4} cols={37} defaultValue={"comment"} />
        <button>Submit</button>
      </form>
    </div>
    <div />
    <div />
    <div className="word">
      <h2>Phone:0777179305</h2><br />
      <h2>Email:mohammadaldbee@gmail.com</h2>
      <div className="grid-icons"><br /><br />
        <a href="https://web.facebook.com/?_rdc=1&_rdr" > <img className="icon" src="https://th.bing.com/th?q=Social+Media+Instagram&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247" alt='' /></a>
        <br /><br /> <a href="https://www.instagram.com/" > <img className="icon" src="https://th.bing.com/th?q=Facebook+E-mail+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247" alt='' /></a>
        <br /><br /> <a href="https://twitter.com/" ><img className="icon" src="https://th.bing.com/th?q=Twitter+Logo+Transparent&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-XA&cc=JO&setlang=en&adlt=strict&t=1&mw=247" alt='' /></a>
      </div>
    </div>
  </div>
</div>

  )
}


export default Projects