import { Component } from "react";


export default  class Body extends Component{
    render(){
        return <div>
           
      <div class="main" id="home">
        <div>
            <h1>Hello, I'm Mohammad <br/>Aldb'ee</h1>
            <br/>
            <h3>Front End Developer</h3><br/>
            <h2>no pain no gain </h2><br/>
            <a class="btn" href="portfolio3.html" target="_blank">more about me</a>
            <h1>{this.props.name}</h1>

        </div>


    </div>
    <div class="about" id="About">
        <div class="empty">

        </div>
        <div class="parg">
            <h2>About me:</h2>
            <p>Front End Developer<br/>
                someone who enjoys helping others and
                fulfilling their needs, i enjoy programmaing and learn it all the
                time.i am persistent,patient and have the necessary
                passion to complete any task.</p><button class="btn ">take a
                    look</button>
        </div>
        <img src={require("../mo2.jpg")} alt="mohammad" />
    </div>
    <div>
    </div>
    <div class="study">
        <h2>My skills and qualifications</h2>
        <div class="cont">
            <div class="item">
                <h3>Skills:</h3><br/>
                <hr/>
                <h4>*persotetion skills</h4>
                <h4>*Design thinking</h4>
                <h4>*self-learning</h4>
                <h4>*self-learning</h4>
            </div>
            <div class="item">
                <h3>Education:</h3><br/>
                <hr/>
                <h4>*civil engineering</h4>
                <h4>*coding at orange's academy</h4>
            </div>
            <div class="item">
                <h3>Technical :</h3><br/>
                <hr/>
                <h4>*Github</h4>
                <h4>*HTML5</h4>
                <h4>*CSS</h4>
                <h4>*Bootstrap</h4>
            </div>
            <div class="item">

                <h3>Experience:</h3><br/>
                <hr/>
                <h4>*A Site engineer for 1 and half year</h4>
                <h4>*Internship in the orange's academy</h4>
            </div>
        </div>

    </div>
    </div>
     }}