function gethome()
{
    home=`<div class="block1">
    <div class="block1-1">
    <h1> Hi, I am Priyanka Agarwal. </h1>
    <h3>I am 31 years old <br> and I Love Building Websites</h3>
    </div>

  <div class="block1-2" >
    <img src="image3.jpg" alt="" height="280px" width="280px">  
  </div>
  </div>`
    document.getElementById('contents').innerHTML=home;
}
function getcontact()
{
    contact=`<div class="block4">
    <div class="block4-form">
    <h2> Contact Us </h2>
    <form action="">
       <div class="form-group">
          <input type="text" name="name" placeholder="Enter Your Name" class="form-control">
       </div>

       <div class="form-group">
          <input type="email" name="email" placeholder="Enter Your Email ID" class="form-control">
       </div>

       <div class="form-group">
          <textarea name="feedback" rows="6" class="form-control"> Any Feedback ? </textarea>
       </div>

       <div class="form-group">
          <input type="submit" value="Submit" class="btn btn-outline-primary btn-block">
       </div>
    </form>
    </div>
 </div>`
 document.getElementById('contents').innerHTML=contact;
}
function getinfo()
{
    info=`<div class="block3">
    <div class="block3-heading">
     <h2>About Me </h2>
    </div>

    <div class="block3-content">
     <div class="block3-text">
        <p> I am a Developer, with a passion for Coding and building sites with stunning designs. I have been working in this field since the last 3 years and during this period I have been fortunate enough to work for some of the best known local business owners and entrepreneurs. Feel free to consult me if you require any of my services.
        </p>
     </div>
    </div>
  </div>`
  document.getElementById('contents').innerHTML=info;
}